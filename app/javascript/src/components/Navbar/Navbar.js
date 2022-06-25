import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import HeaderLogo from '../../assets/img/header_logo.png';

//required for navbar dropdown to work

const Navbar = () =>{

    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark px-3" id="navbarContainer">
        <div className="container-fluid">
            <a className="navbar-brand" href="/" id="navbarLogo"> <img src={HeaderLogo} height="50px"/></a>
            <button className="navbar-toggler" id="navbarToggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarButtonContainer">
            <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
                <li className="nav-item">
                <a className="nav-link btn text-white" id="myAccountButton" aria-current="page" href="#">My Account</a>
                </li>
                <li className="nav-item">
                <a className="nav-link btn text-white" id="messagesButton" href="#">Messages</a>
                </li>
                <li className="nav-item">
                <a className="nav-link btn btn-danger text-white" id="logoutButton">Log Out</a>
                </li>

            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;