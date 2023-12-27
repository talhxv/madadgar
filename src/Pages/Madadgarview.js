import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import Mapboxtwo from "../components/Mapboxtwo";
import Hometabstwo from "../components/hometabstwo";

export default function Madadgarview() {
    const location = useLocation();
    const history= useNavigate();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const isMorning = hours >= 6 && hours < 12;
    const greeting = isMorning ? "Good Morning" : "Good Evening"


    useEffect(() => {
        // Save user to localStorage whenever it changes
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    return (
        <>
            <Mapboxtwo />
            <Topbar text={`${greeting},\n ${user ? user.name : 'Guest'}👋`}/>
            <Hometabstwo/>
            <Bottombar user={user} />
        </>
    );
};

