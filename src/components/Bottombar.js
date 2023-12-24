import React from 'react';
import tabbar from '../images/tab-bar.svg';
import home from '../images/bottom/Home.svg';
import fav from '../images/bottom/Heart.svg';
import profile from '../images/bottom/Profile.svg';
import inbox from '../images/bottom/Inbox.svg';
import {Link} from "react-router-dom";
export default function Bottombar() {
    return (
        <>
            {/* Overlay */}
            {/* Icons */}
            <div className="fixed flex justify-around items-end w-full bottom-7 z-10">
                <Link to={'/Home'}>
                <img src={home}
                     className="h-7 w-7"
                     alt="Home"/>
                </Link>
                <img src={inbox}
                     className="h-7 w-7"
                     alt="Inbox"/>
                <img src={fav}
                     className="h-7 w-7"
                     alt="Favorites"/>
                <img src={profile}
                     className="h-7 w-7"
                     alt="Profile"/>
            </div>

            {/* Tabbar */}
            <div className="fixed bottom-0 w-full">
                <img
                    className="m-auto h-30 w-full object-contain"
                    src={tabbar}
                    alt="Tabbar"
                />
            </div>
        </>
    );
}
