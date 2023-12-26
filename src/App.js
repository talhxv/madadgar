// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import Register from "./Pages/Register";
import CreateJob from "./Pages/CreateJob";
import PopUpConfirm from "./Pages/PopUpConfirm";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import Profile from "./Pages/Profile";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/"
                       element={<Landing/>}/>
                <Route path="/login"
                       element={<Login/>}/>
                <Route path="/register"
                       element={<Register/>}/>
                <Route path="/CreateJob"
                       element={<CreateJob/>}/>
                <Route path="/Popup"
                       element={<PopUpConfirm/>}/>
                <Route path="/Home"
                       element={<Home/>}/>
                <Route path="/Test"
                       element={<Test/>}/>
                <Route path="/Profile"
                       element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
