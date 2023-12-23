import React from 'react';
import topbar from '../images/top-bar2.svg';
import backarrow from '../images/arrow-back.svg';

export default function Topbar() {
    return (
        <>
            <div className="fixed top-0 w-full">
                <img
                    className="m-auto h-30 w-full object-contain"
                    src={topbar}
                    alt="Top Bar"
                />
                <div className="absolute top-1/2  transform translate-x-4 -translate-y-1/2">
                    <img src={backarrow}/>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-14 -translate-y-1/2 text-white text-center">
                    <h1 className="text-lg font-Gilroy font-semibold">Create a Job 👍</h1>
                </div>
            </div>
        </>
    );
};
