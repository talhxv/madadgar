import React from "react";
import Createjob from "../images/hometabs/CreateJob.svg";
import Search from "../images/hometabs/Search.svg";
import Categories from "../images/hometabs/Categories.svg";
import JobHistory from "../images/hometabs/JobHistory.svg";
import {Link} from "react-router-dom";

const Hometabs = () => {
    return (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex justify-around items-end w-full mb-24">
            <Link to={'/Createjob'} >
            <img src={Createjob} alt="Create Job" className="w-16 h-16 drop-shadow-xl" />
            </Link>
            <img src={Search} alt="Search" className="w-16 h-16 drop-shadow-xl" />
            <img src={Categories} alt="Categories" className="w-16 h-16 drop-shadow-xl" />
            <img src={JobHistory} alt="Job History" className="w-16 h-16 drop-shadow-xl" />
        </div>
    );
};

export default Hometabs;
