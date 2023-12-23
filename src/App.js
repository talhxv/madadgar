// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import Register from "./Pages/Register";
import CreateJob from "./Pages/CreateJob";
import PopUpConfirm from "./Pages/PopUpConfirm";
import Home from "./Pages/Home";
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
                       element={<PopUpConfirm />} />
                <Route path="/Home"
                       element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
