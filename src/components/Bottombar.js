import React from 'react';
import tabbar from '../images/tab-bar.svg';
import topbar from '../images/top-bar2.svg';

export default function Bottombar() {
    return (
        <>
            <div
                className="opacity-10 h-50 inset-0 bg-gradient-to-t from-black fixed bottom-0"
                style={{mixBlendMode: 'multiply'}}
            ></div>
            <div className="fixed bottom-0 w-full">
                <div>
                    <img
                        className="m-auto h-30 w-full object-contain"
                        src={tabbar}
                        alt="Tabbar"
                    />
                </div>
            </div>
        </>
    );
};
