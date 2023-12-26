// CreateJob.js

import React, { useState, useEffect } from "react";
import Topbar from "../components/Topbar";
import Bottombar from '../components/Bottombar';
import InsertImage from '../images/add-photo.svg';
import {useLocation, useNavigate} from "react-router-dom";

export default function CreateJob() {
    const location = useLocation();
    const history =useNavigate();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    // Assume categories will be fetched from the backend and stored in state
    const [categories, setCategories] = useState([]);

    // Simulate fetching categories from the backend on component mount
    useEffect(() => {
        // Replace this with your actual API call to fetch categories
        const fetchCategories = async () => {
            // Example: Fetch categories from the backend
            const response = await fetch('http://localhost:3001/api/categories');
            const data = await response.json();
            setCategories(data); // Update state with fetched categories
        };

        fetchCategories();
    }, []); // Empty dependency array to run the effect only once on component mount
    return (

        <div className="relative">
            <Topbar text="Create a Job 👍" />
            <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-24">
                <div className="max-w-md mx-auto p-6 rounded-md mt-3">
                    <h2 className="text-2xl font-Gilroy font-bold"> Enter your job details 🛠️ </h2>
                    <form>
                        <div className="mt-4">
                            <label htmlFor="jobTitle"
                                   className="block text-gray-700 text-sm font-Gilroy font-bold mb-2">Title</label>
                            <input type="text"
                                   placeholder="Enter your task 🔨"
                                   id="jobTitle"
                                   name="jobTitle"
                                   className="w-full p-2 border font-Gilroy border-gray-300 rounded-2xl"/>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="jobDetails"
                                   className="block text-gray-700 text-sm font-bold font-Gilroy mb-2 ">Details</label>
                            <textarea id="jobDetails"
                                      placeholder="Give relevant details 📝"
                                      name="jobDetails"
                                      className="w-full p-2 border font-Gilroy border-gray-300 rounded-2xl"
                                      rows="4"></textarea>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="category"
                                   className="block text-gray-700 text-sm font-bold font-Gilroy mb-2">Category</label>
                            <select id="category"
                                    name="category"
                                    className="w-full p-2 border font-Gilroy border-gray-300 rounded-2xl max-w-full overflow-x-auto">
                                <option value=""
                                        disabled selected> Choose job category 🗂️
                                </option>
                                {categories.map(category => (
                                    <option key={category._id}
                                            value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <img className="mt-4 mx-auto mb-5"
                            src={InsertImage}/>
                        <button
                            type="submit"
                            className="w-full mx-auto mt-4 text-white bg-[#02D1AC] hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-Gilroy font-semibold text-m rounded-full px-5 py-2.5 text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md"
                        >
                            Create Job
                        </button>
                    </form>
                </div>

            </div>

            <Bottombar user={user} />
        </div>
    );
}
