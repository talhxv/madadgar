// ViewPendingJobs.js

import React, { useState, useEffect } from 'react';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Topbarzindex from '../components/Topbarzindex';
import {useLocation, useNavigate} from "react-router-dom";

export default function ViewPendingJobs() {
    const location = useLocation();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    const [pendingJobs, setPendingJobs] = useState([]);

    useEffect(() => {
        const fetchPendingJobs = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/pendingJobs/${user.name}`);
                const data = await response.json();
                setPendingJobs(data);
            } catch (error) {
                console.error('Error fetching pending jobs:', error);
            }
        };

        fetchPendingJobs();
    }, [user]);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-16 md:mt-32 relative overflow-hidden">
                <Topbarzindex text="Pending Jobs 🕑" />
                <div className="mt-10 px-4 md:px-8 font-Gilroy relative z-10">
                    {pendingJobs.map((job) => (
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
                        </div>
                    ))}
                </div>
                <Bottombar user={user} />
            </div>
        </>
    );
};
