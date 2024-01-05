import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import Hometabs from "../components/hometabs";
import MapboxMap from "../components/MapboxMap";


const Home = () => {
    const location = useLocation();
    const history = useNavigate();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser || (location.state && location.state.user) || null);
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const isMorning = hours >= 6 && hours < 12;
    const greeting = isMorning ? "Good Morning" : "Good Evening"

    console.log(user);
    useEffect(() => {

        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    return (
        <>
            <MapboxMap/>
            <Topbar text={`${greeting},\n ${user ? user.name : 'Guest'}👋`}/>
            <Hometabs/>
            <Bottombar user={user}/>
        </>
    );
};

export default Home;
