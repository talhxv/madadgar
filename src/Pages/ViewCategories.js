import React, {useState} from "react";
import Topbar from "../components/Topbar";
import {useLocation} from "react-router-dom";
import Bottombar from "../components/Bottombar";

export default function ViewCategories()
{
    const location = useLocation();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        jobTitle: "", jobDetails: "", category: "", image: null, // For storing the selected image file
    });

    return(
        <>
            <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-24">
            <Topbar text="Categories 🗃️"/>
            <Bottombar user={user}/>
            </div>
        </>
    );
}