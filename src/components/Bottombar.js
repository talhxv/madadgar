// Bottombar.js
import React, { useState } from 'react';
import tabbar from '../images/tab-bar.svg';
import home from '../images/bottom/Home.svg';
import fav from '../images/bottom/Heart.svg';
import profile from '../images/bottom/Profile.svg';
import inbox from "../images/bottom/Inbox.svg"
import { Link } from 'react-router-dom';
import ProfileDrawer from '../Pages/Profile';

export default function Bottombar({ user }) {
    const [isProfileDrawerOpen, setProfileDrawerOpen] = useState(false);

    return (
        <>
            {/* Icons */}
            <div className="fixed flex justify-around items-end w-full bottom-7 z-30">
                <Link to={'/Home'}>
                    <img src={home} className="h-7 w-7" alt="Home" />
                </Link>
                <img src={inbox} className="h-7 w-7" alt="Inbox" />
                <img src={fav} className="h-7 w-7" alt="Favorites" />
                <button onClick={() => setProfileDrawerOpen(true)}>
                    <img src={profile} className="h-7 w-7" alt="Profile" />
                </button>
            </div>

            {/* Tabbar */}
            <div className="fixed bottom-0 w-full z-20">
                <img
                    className="m-auto h-30 w-full object-contain"
                    src={tabbar}
                    alt="Tabbar"
                />
            </div>

            {/* Profile Drawer */}
            <ProfileDrawer
                isOpen={isProfileDrawerOpen}
                onClose={() => setProfileDrawerOpen(false)}
                userProfile={user} // Replace with actual user data
            />
        </>
    );
}
