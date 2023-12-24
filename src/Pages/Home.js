import React from "react";
import { useLocation } from "react-router-dom";
import Topbar from "../components/Topbar";
import Bottombar from "../components/Bottombar";
import Hometabs from "../components/hometabs";
import MapboxMap from "../components/MapboxMap";

const Home = () => {
    const location = useLocation();
    const user = location.state?.user;

    return (
        <>
            <div className="min-h-screen bg-gradient-to-t from-gray-200 to-transparent mt-24">
                <MapboxMap />
                <Topbar text={`Good Morning,\n ${user ? user.name : 'Guest'}👋`} />
                <Hometabs />
                <Bottombar />
            </div>
        </>
    );
};

export default Home;
