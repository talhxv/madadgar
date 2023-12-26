// App.js
import React, { useState } from 'react';
import ProfileDrawer from './Profile';

const App = () => {
    const [isProfileDrawerOpen, setProfileDrawerOpen] = useState(false);

    const userProfile = {
        name: 'John Doe', // Replace with the actual user's name
        // Add more user details here if needed
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-center h-screen">
                <button
                    onClick={() => setProfileDrawerOpen(!isProfileDrawerOpen)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Open Profile
                </button>
            </div>

            {/* Profile Drawer */}
            <ProfileDrawer
                isOpen={isProfileDrawerOpen}
                onClose={() => setProfileDrawerOpen(false)}
                userProfile={userProfile}
            />
        </div>
    );
};

export default App;
