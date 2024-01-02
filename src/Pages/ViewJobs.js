// Viewjobs.js

import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Topbarzindex from '../components/Topbarzindex';
import Viewjobdetails from './Viewjobdetails'; // Import the new page

export default function Viewjobs() {
    const location = useLocation();
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    useEffect(() => {
        // Fetch jobs data from your backend API
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/jobs'); // Update with your actual API endpoint
                const data = await response.json();
                setJobs(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    const handleButtonClick = (job) => {
        // Handle button clicks based on the action (Accept or See Details)
        console.log('See Details clicked');
        // Navigate to Viewjobdetails page with the job details
        navigate(`/viewjobdetails/${job._id}`, { state: { job } });
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-16 md:mt-32 relative overflow-hidden">
                <Topbarzindex text="View Jobs 👁️" />
                <div className="mt-10 px-4 md:px-8 font-Gilroy relative z-10">
                    {jobs.map((job) => (
                        <div
                            key={job._id}
                            className="job-item-container mb-4 p-4 md:p-6 border border-gray-300 rounded-2xl shadow-md overflow-hidden relative group"
                        >
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="job-details flex-1">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                                        {job.jobTitle}
                                    </h3>
                                    <div className="price-details flex">
                                        <p className="text-green-500 font-semibold mr-2">
                                            Start Offer: Rs {job.priceRange.start}
                                        </p>
                                        <p className="text-red-500 font-semibold ml-8">
                                            End Offer: Rs {job.priceRange.end}
                                        </p>
                                    </div>
                                    {/* Add more job details as needed */}
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-lg">
                                <button
                                    className="w-full md:w-36 mx-2 md:mx-0 text-white bg-[#02D1AC] hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-Gilroy font-semibold text-m rounded-full px-5 py-2.5 md:text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md"
                                    onClick={() => handleButtonClick(job)}
                                >
                                    Accept
                                </button>
                                <button
                                    className="w-full md:w-36 mx-2 md:mx-0 mt-2 md:mt-0 text-gray-500 bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-Gilroy font-semibold rounded-full text-sm px-5 py-2.5 md:text-center border border-gray-200 dark:hover:bg-gray-300 dark:focus:ring-gray-400 drop-shadow-md"
                                    onClick={() => handleButtonClick(job)}
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* No Blurred overlay */}
                <Bottombar user={user} />
            </div>
        </>
    );
}
