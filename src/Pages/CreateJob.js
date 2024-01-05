import React, {useState, useEffect} from "react";
import Topbar from "../components/Topbar";
import Bottombar from '../components/Bottombar';
import {useLocation} from "react-router-dom";

export default function CreateJob() {
    const location = useLocation();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    const [categories, setCategories] = useState([]);
    const [priceRange, setPriceRange] = useState({start: "", end: ""});
    const [formData, setFormData] = useState({
        jobTitle: "", jobDetails: "", category: "", image: null, priceRange: {start: "", end: ""}, // For storing the selected image file
    });
    useEffect(() => {

        const selectedCategory = location.state?.selectedCategory;

        if (selectedCategory && selectedCategory !== formData.category) {

            setFormData({...formData, category: selectedCategory});
        }
    }, [location.state, formData]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/categories");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({...formData, image: file});
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!formData.jobTitle || !formData.jobDetails) {
            console.error('JobTitle and JobDetails are required.');
            return;
        }

        try {
            const formDataForBackend = new FormData();
            formDataForBackend.append("jobTitle", formData.jobTitle);
            formDataForBackend.append("jobDetails", formData.jobDetails);
            formDataForBackend.append("category", formData.category);
            formDataForBackend.append("startPrice", priceRange.start);
            formDataForBackend.append("endPrice", priceRange.end);
            formDataForBackend.append("image", formData.image);
            formDataForBackend.append("userName", user.name);

            const response = await fetch("http://localhost:3001/api/jobs", {
                method: "POST", body: formDataForBackend,
            });

            const data = await response.json();

            if (data.success) {
                console.log("Job created successfully:", data.job);

                // Reset the form data
                setFormData({
                    jobTitle: "",
                    jobDetails: "",
                    category: "",
                    image: null,
                });
                setPriceRange({start: "", end: ""});

            } else {
                console.error("Job creation failed:", data.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (<div className="relative">
        <Topbar text="Create a Job 👍"/>
        <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-24">
            <div className="max-w-md mx-auto p-6 rounded-md mt-3">
                <h2 className="text-2xl font-Gilroy font-bold"> Enter your job details 🛠️ </h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="mt-4">
                        <label htmlFor="jobTitle"
                               className="block text-gray-700 text-sm font-Gilroy font-bold mb-2">Title</label>
                        <input type="text"
                               placeholder="Enter your task 🔨"
                               id="jobTitle"
                               name="jobTitle"
                               value={formData.jobTitle}
                               onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                               className="w-full p-2 border font-Gilroy border-gray-300 rounded-2xl"/>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="jobDetails"
                               className="block text-gray-700 text-sm font-bold font-Gilroy mb-2 ">Details</label>
                        <textarea id="jobDetails"
                                  placeholder="Give relevant details 📝"
                                  name="jobDetails"
                                  value={formData.jobDetails}
                                  onChange={(e) => setFormData({...formData, jobDetails: e.target.value})}
                                  className="w-full p-2 border font-Gilroy border-gray-300 rounded-2xl"
                                  rows="4"></textarea>
                    </div>
                    <div className="mt-4 flex space-x-4">
                        <div className="w-1/2">
                            <input
                                type="number"
                                id="startPrice"
                                name="startPrice"
                                value={priceRange.start}
                                onChange={(e) => setPriceRange({...priceRange, start: e.target.value})}
                                className="w-full p-2 border font-Gilroy border-gray-300 rounded-2xl"
                                placeholder="Enter start offer 💵 "
                            />
                        </div>
                        <div className="w-1/2">

                            <input
                                type="number"
                                id="endPrice"
                                name="endPrice"
                                value={priceRange.end}
                                onChange={(e) => setPriceRange({...priceRange, end: e.target.value})}
                                className="w-full p-2 border font-Gilroy border-gray-300 rounded-2xl"
                                placeholder="Enter end offer 💵 "
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="category"
                               className="block text-gray-700 text-sm font-bold font-Gilroy mb-2">Category</label>
                        <select
                            id="category"
                            name="category"
                            className="w-full p-2 border font-Gilroy border-gray-300 rounded-2xl max-w-full overflow-x-auto"
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                            value={formData.category}
                        >
                            <option value=""
                                    disabled
                                    selected>
                                Choose job category 🗂️
                            </option>
                            {categories.map((category) => (<option key={category._id}
                                                                   value={category._id}>
                                {category.name}
                            </option>))}
                        </select>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="image"
                               className="block text-gray-700 text-sm font-bold font-Gilroy mb-2">
                            Insert Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full p-2 border font-Gilroy border-gray-300 rounded-2xl"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mx-auto mt-4 text-white bg-[#02D1AC] hover:bg-[#01998B] focus:outline-none focus:ring-4 focus:ring-[#01998B] font-Gilroy font-semibold text-m rounded-full px-5 py-2.5 text-center dark:bg-[#02D1AC] dark:hover:bg-[#01998B] dark:focus:ring-[#01998B] drop-shadow-md"
                    >
                        Create Job
                    </button>
                </form>
            </div>
        </div>

        <Bottombar user={user}/>
    </div>);
}
