import React, { useRef } from 'react';
import "./Navbar.scss"
import vaccineLogo from "../../../assets/vaccine-logo.svg"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuContainer = useRef(null)
    const handleMenuClick = () => {
        menuContainer.current.style.transform = "translateX(0)"
    }
    const handleCloseClick = () => {
        menuContainer.current.style.transform = "translateX(-100%)"
    }
    return (
        <section className="navbar" ref={menuContainer}>
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
                <div className="cross-icon" onClick={handleCloseClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
            <div className="menu-icon" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </section>
    );
};

export default Navbar;