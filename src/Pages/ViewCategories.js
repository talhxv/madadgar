import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";

export default function ViewCategories() {
    const navigate = useNavigate();
    const location = useLocation();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

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

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        // Optionally, you can redirect to the Create Job page here
        navigate("/CreateJob", { state: { selectedCategory: categoryId } });
    };

    return (
        <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-32">
            <Topbar text="Categories 🗃️" />
            <div className="grid grid-cols-2 gap-2 pl-1.5 pr-1.5">
                {categories.map((category, index) => (
                    <div
                        key={category._id}
                        onClick={() => handleCategoryClick(category._id)}
                        className={`${index % 2 === 0 ? 'mb-2' : ''} cursor-pointer`}
                    >
                        <img
                            src={category.img}
                            alt={category.name}
                            className={`w-full h-30 object-cover ${
                                selectedCategory === category._id ? 'border-4 border-[#02D1AC]' : ''
                            }`}
                        />
                    </div>
                ))}
            </div>
            <Bottombar user={user} />
        </div>
    );
}
