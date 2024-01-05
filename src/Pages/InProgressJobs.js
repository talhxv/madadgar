import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

import Topbarzindex from '../components/Topbarzindex';
import Bottombar from '../components/Bottombar';

export default function InProgressJobs() {
    const location = useLocation();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    const [jobStatuses, setJobStatuses] = useState([]);
    const [jobDetails, setJobDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get('http://localhost:3001/api/jobstatuses')
            .then(response => setJobStatuses(response.data))
            .catch(error => console.error(error));
    }, []);

    const fetchJobDetails = async (jobId) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/jobs/${jobId}`);
            setJobDetails(response.data);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    const handleSeeDetails = (jobId) => {

        navigate(`/viewjobdetails/${jobId}`);
    };

    const handleMarkAsCompleted = async (jobId) => {
        console.log(jobId);
        try {
            const response = await axios.post(`http://localhost:3001/api/markAsCompleted/${jobId}`, {
                completionStatus: true,
            });

            if (response.status === 200) {
                // Update job status to reflect completion
                const updatedJobStatuses = jobStatuses.map((job) =>
                    job._id === jobId ? {...job, completionStatus: true} : job
                );
                setJobStatuses(updatedJobStatuses);
            } else {
                console.error('Error marking job as completed:', response.data.message || response.statusText);
            }
        } catch (error) {
            console.error('Error marking job as completed:', error.message || error);
        }
    };

    // Filter jobs accepted by the current user
    const acceptedJobs = jobStatuses.filter(job => job.acceptedBy === user?.name);

    return (
        <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-16 md:mt-32 relative overflow-hidden">
            <Topbarzindex text="In Progress 🚧"/>
            <div className="mt-10 px-4 md:px-8 font-Gilroy relative z-10">
                {acceptedJobs
                    .filter(job => !job.completionStatus) // Filter jobs with completionStatus as false
                    .map(job => (
                        <div key={job._id}
                             className="mb-6 p-4 bg-white rounded-lg shadow-md">
                            <p className="mb-2">JobId: {job.jobId}</p>
                            <p className="mb-2">Acceptance: {job.acceptance ? 'Accepted' : 'Not Accepted'}</p>
                            <p className="mb-2">Accepted By: {job.acceptedBy}</p>
                            <p className="mb-2">Completion
                                Status: {job.completionStatus ? 'Completed' : 'Not Completed'}</p>
                            <div className="flex space-x-2">
                                <button className="btn"
                                        onClick={() => fetchJobDetails(job.jobId)}>
                                    Fetch Job Details
                                </button>
                                <button className="btn"
                                        onClick={() => handleSeeDetails(job.jobId)}>
                                    See Details
                                </button>
                            </div>
                            <button
                                className={`w-full mt-4 text-white ${
                                    job.completionStatus ? 'bg-gray-500' : 'bg-[#02D1AC]'
                                } hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-Gilroy font-semibold text-m rounded-full px-5 py-2.5 md:text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md`}
                                onClick={() => handleMarkAsCompleted(job.jobId)}
                                disabled={job.completionStatus}
                            >
                                {job.completionStatus ? 'Completed' : 'Mark as Completed'}
                            </button>
                        </div>
                    ))}
            </div>


            <Bottombar user={user}/>
        </div>
    );
}
