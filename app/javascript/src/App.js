import React from 'react';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Vehicle from './pages/Vehicle/Vehicle';
import Vehicles from './pages/Vehicles/Vehicles';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}></Route>
                <Route exact path="/home" element={<Home/>}></Route>
                <Route exact path= "/vehicles" element={<Vehicles/>}></Route>
                <Route exact path="/vehicles/:slug" element={<Vehicle/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;