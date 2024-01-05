// Viewjobdetails.js

import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Topbarzindex from '../components/Topbarzindex';
import Bottombar from '../components/Bottombar';

export default function Viewjobdetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const job = location.state && location.state.job;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    const [accepted, setAccepted] = useState(false); // State to track whether the job is accepted

    if (!job) {

        return (
            <div>
                <p>No job details available.</p>
            </div>
        );
    }

    const handleAcceptJob = async () => {
        try {
            // Send a request to accept the job
            const response = await fetch(`http://localhost:3001/api/acceptJob/${job._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userName: user.name}),
            });

            if (response.ok) {
                console.log('Job accepted successfully');
                // Update the state to reflect the acceptance
                setAccepted(true);
            } else {
                console.error('Error accepting job:', response.statusText);
            }
        } catch (error) {
            console.error('Error accepting job:', error);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-16 md:mt-32 relative overflow-hidden">
                <Topbarzindex text={`Job Details 🗒️`}/>
                <div className="mt-20 px-4 md:px-8 font-Gilroy relative z-10">
                    {job.image && (
                        <div className="mb-4">
                            <img
                                src={`http://localhost:3001/${job.image}`}
                                alt={job.jobTitle}
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    )}

                    <h3 className="mt-2 text-2xl md:text-2xl font-semibold text-gray-800">
                        {job.jobTitle}
                    </h3>

                    <div className="mt-2 text-xl  job-details flex-1 mb-4">
                        <p> {job.jobDetails}</p>
                    </div>

                    <div className="mt-12 price-details flex justify-center mb-4">
                        <p className="text-green-500 font-semibold mr-2">
                            Start Offer: Rs {job.priceRange.start}
                        </p>
                        <p className="text-red-500 font-semibold ml-8">
                            End Offer: Rs {job.priceRange.end}
                        </p>
                    </div>

                    <button
                        className={`w-full text-white ${
                            accepted ? 'bg-gray-500' : 'bg-[#02D1AC] hover:bg-[#01998B]'
                        } focus:outline-none focus:ring-4 focus:ring-[#01998B] font-Gilroy font-semibold text-m rounded-full px-5 py-2.5 md:text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md`}
                        onClick={() => {

                            if (!accepted) {
                                handleAcceptJob();
                            }
                        }}
                        disabled={accepted}
                    >
                        {accepted ? 'Accepted' : 'Accept'}
                    </button>
                </div>
            </div>

            <Bottombar/>
        </>
    );
}
