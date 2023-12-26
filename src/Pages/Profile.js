// ProfileDrawer.js
import React from 'react';
import topbar from '../images/top-bar.svg';
import profile from '../images/profile-big.svg';
import favorites from '../images/favorites-blue.svg';
import frontarrow from '../images/front-arrow.svg';
import notificationbell from '../images/notificationbell.svg';
import changemodes from '../images/changemode.svg';
import logout from '../images/logout.svg';

const ProfileDrawer = ({ isOpen, onClose, userProfile }) => {
    const drawerAnimation = isOpen ? 'translate-x-0' : 'translate-x-full';
    const blurBackground = isOpen ? 'blur-sm' : '';
    const userName = userProfile ? userProfile.name : 'John Doe';
    return (
        <div className={`fixed inset-0 z-50 overflow-hidden transition-transform transform ${drawerAnimation}`}>
            <div className={`absolute inset-0 bg-black opacity-50 ${blurBackground}`} onClick={onClose}></div>
            <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white overflow-y-auto">
                <div className="relative mb-4">
                    <img
                        src={topbar}
                        alt="Topbar"
                        className="w-full object-cover"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-300">
                                    <img src={profile}/>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-regular font-Gilroy text-white">
                                    {userName || 'John Doe'}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-24 justify-between px-4">
                    <div className="flex items-center space-x-2">
                        <img src={favorites}
                             alt="Favorites"/>
                        <h3 className="text-base font-medium font-Gilroy text-gray-800">Favorites</h3>
                    </div>
                    <img src={frontarrow}
                         alt="Front Arrow"
                         className="ml-auto"/>
                </div>
                <div className="flex items-center mt-6 justify-between px-4">
                    <div className="flex items-center space-x-2">
                        <img src={notificationbell}
                             alt="Favorites"/>
                        <h3 className="text-base font-medium font-Gilroy text-gray-800">Notifications</h3>
                    </div>
                    <img src={frontarrow}
                         alt="Front Arrow"
                         className="ml-auto"/>
                </div>
                <div className="flex items-center mt-6 justify-between px-4">
                    <div className="flex items-center space-x-2">
                        <img src={changemodes}
                             alt="Favorites"/>
                        <h3 className="text-base font-medium font-Gilroy text-gray-800">Switch Modes to Madadgar </h3>
                    </div>
                    <img src={frontarrow}
                         alt="Front Arrow"
                         className="ml-auto"/>
                </div>
                <div className="absolute bottom-0 right-0 pb-12">
                    <img
                        src={logout}
                        alt="Logout"
                        className="cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileDrawer;
