import React from 'react';
import "./Navbar.scss"
import vaccineLogo from "../../assets/vaccine-logo.svg"
const Navbar = () => {
    return (
        <section className="navbar">
            <div className="navbar-container d-flex align-items-center justify-content-between">
                <div className="navbar-logo">
                    <img src={vaccineLogo} alt="vaccine-logo" />
                </div>
                <div className="navbar-menu">  
                    <a href="/" className="active">Home</a>
                    <a href="/">Signatories</a>
                    <a href="/">Events</a>
                    <a href="/">Partners</a>
                    <a href="/" className="join-btn">Join</a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;