// Topbar.js
import React from 'react';
import {useNavigate} from 'react-router-dom';
import topbar from '../images/top-bar2.svg';
import backarrow from '../images/arrow-back.svg';

export default function Topbar({text}) {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="fixed top-0 w-full">
            <img
                className="m-auto h-30 w-full object-contain"
                src={topbar}
                alt="Top Bar"
            />
            <div
                className="absolute top-1/2 transform translate-x-4 -translate-y-1/2 cursor-pointer"
                onClick={goBack}
            >
                <img src={backarrow}
                     alt="Back Arrow"/>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-14 -translate-y-1/2 text-white text-center">
                <h1 className="text-lg font-Gilroy font-semibold"
                    style={{whiteSpace: 'pre-line'}}>
                    {text}
                </h1>
            </div>
        </div>
    );
}
