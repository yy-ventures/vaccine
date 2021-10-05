import React from 'react';
import "./Navbar.scss"
import vaccineLogo from "../../../assets/vaccine-logo.svg"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <section className="navbar">
            <div className="navbar-container d-flex align-items-center justify-content-between">
                <div className="navbar-logo">
                    <img src={vaccineLogo} alt="vaccine-logo" />
                </div>
                <div className="navbar-menu">  
                    <Link to="/" className="active">Home</Link>
                    <Link to="/signatories">Signatories</Link>
                    <a href="/">Events</a>
                    <Link to="/partners">Partners</Link>
                    <Link to="/pledge" className="join-btn">Join</Link>
                </div>
            </div>
        </section>
    );
};

export default Navbar;