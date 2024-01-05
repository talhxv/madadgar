import React from "react";
import ViewJobs from "../images/hometabs2/view.svg";
import Search from "../images/hometabs/Search.svg";
import PendingJobs from "../images/hometabs2/pending-jobs.svg";
import CompletedJobs from "../images/hometabs2/completedjobs.svg";
import {Link} from "react-router-dom";

const Hometabstwo = () => {
    return (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex justify-around items-end w-full mb-24">
            <Link to={'/Viewjobs'}>
                <img src={ViewJobs}
                     alt="Create Job"
                     className="w-16 h-16 drop-shadow-xl"/>
            </Link>
            <img src={Search}
                 alt="Search"
                 className="w-16 h-16 drop-shadow-xl"/>
            <Link to={'/inprogressjobs'}>
                <img src={PendingJobs}
                     alt="Categories"
                     className="w-16 h-16 drop-shadow-xl"/>
            </Link>
            <img src={CompletedJobs}
                 alt="Job History"
                 className="w-16 h-16 drop-shadow-xl"/>
        </div>
    );
};

export default Hometabstwo;
