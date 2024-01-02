// Topbar.js
import React from 'react';
import topbar from '../images/top-bar2.svg';
import backarrow from '../images/arrow-back.svg';
import {useNavigate} from "react-router-dom";

export default function Topbarzindex({ text }) {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Go back to the previous page
    };
    return (
        <>
            <div className="fixed top-0 w-full z-20">
                <img
                    className="m-auto h-30 w-full object-contain"
                    src={topbar}
                    alt="Top Bar"
                />
                <div className="absolute top-1/2 transform translate-x-4 -translate-y-1/2"
                     onClick={goBack}>
                    <img src={backarrow} alt="Back Arrow" />
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-14 -translate-y-1/2 text-white text-center">
                    <h1 className="text-lg font-Gilroy font-semibold" style={{ whiteSpace: 'pre-line' }}>
                        {text}
                    </h1>
                </div>
            </div>
        </>
    );
}
