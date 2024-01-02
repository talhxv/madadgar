// Viewjobdetails.js

import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Topbarzindex from '../components/Topbarzindex';
import Bottombar from '../components/Bottombar';

export default function Viewjobdetails() {
    const location = useLocation();
    const job = location.state && location.state.job;

    if (!job) {
        // Handle the case where no job details are available
        return (
            <div>
                <p>No job details available.</p>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-16 md:mt-32 relative overflow-hidden">
                <Topbarzindex text={`Job Details 🗒️`}/>
                <div className="mt-20 px-4 md:px-8 font-Gilroy relative z-10">
                    {/* Display Image */}
                    {job.image && (
                        <div className="mb-4">
                            <img
                                src={`http://localhost:3001/${job.image}`}
                                alt={job.jobTitle}
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    )}
                    {/* Display Title */}
                    <h3 className="mt-2 text-2xl md:text-2xl font-semibold text-gray-800">
                        {job.jobTitle}
                    </h3>
                    {/* Display Job Details */}
                    <div className="mt-2 text-xl  job-details flex-1 mb-4">
                        <p> {job.jobDetails}</p>
                    </div>
                    {/* Display Price Range */}
                    <div className="mt-12 price-details flex justify-center mb-4">
                        <p className="text-green-500 font-semibold mr-2">
                            Start Offer: Rs {job.priceRange.start}
                        </p>
                        <p className="text-red-500 font-semibold ml-8">
                            End Offer: Rs {job.priceRange.end}
                        </p>
                    </div>
                    {/* Accept Button */}
                    <button
                        className="w-full text-white bg-[#02D1AC] hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-Gilroy font-semibold text-m rounded-full px-5 py-2.5 md:text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md"
                        onClick={() => {
                            // Handle the Accept button click
                        }}
                    >
                        Accept
                    </button>
                </div>
            </div>
                {/* No Blurred overlay */}
            <Bottombar/>
        </>
    );
}
