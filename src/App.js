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
import MadadgarHome from "./Pages/MadadgarHome";
import Viewjobs from "./Pages/ViewJobs";
import Insertimages from "./Pages/insertimages";
import ViewCategories from "./Pages/ViewCategories";
import Viewjobdetails from "./Pages/Viewjobdetails";
import Pendingjobs from "./Pages/Pendingjobs";
import InProgressJobs from "./Pages/InProgressJobs";

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
                       element={<Profile/>}/>
                <Route path="/madadgarhome"
                       element={<MadadgarHome/>}/>
                <Route path="/Viewjobs"
                       element={<Viewjobs/>}/>
                <Route path="/insertimages"
                       element={<Insertimages/>}/>
                <Route path='/ViewCategories'
                       element={<ViewCategories/>}/>
                <Route path='/ViewJobs'
                       element={<Viewjobs/>}/>
                <Route path={'/Viewjobdetails'}
                       element={<Viewjobdetails/>}/>
                <Route path="/viewjobdetails/:id"
                       element={<Viewjobdetails/>}/>
                <Route path={'/Viewpendingjobs'}
                       element={<Pendingjobs/>}/>
                <Route path={'/inprogressjobs'}
                       element={<InProgressJobs/>}/>
                <Route path={'/inprogressjobs/:jobId'}
                       element={<InProgressJobs/>}/>
            </Routes>
        </Router>
    );
}

export default App;
