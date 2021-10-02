import React, { useRef } from 'react';
import "./Navigation.scss";
import vaccineLogo from "../../assets/vaccine-logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const menuContainer = useRef(null)
    const handleMenuClick = () => {
        menuContainer.current.style.transform = "translateX(0)"
    }
    const handleCloseClick = () => {
        menuContainer.current.style.transform = "translateX(-100%)"
    }
    return (
        <header className="navigation-section">
            <nav className="position-absolute vertical-navigation d-flex align-items-center justify-content-center flex-column" ref={menuContainer}>
                <div className="logo-container">
                    <img src={vaccineLogo} alt="vaccine-logo" />
                </div>
                <div className="menu-container">
                    <a href="/">Home</a>
                    <a href="/">Signatories</a>
                    <a href="/">Events</a>
                    <a href="/">Partners</a>
                    <a href="/">Join</a>
                </div>
                <div className="cross-icon" onClick={handleCloseClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </nav>
            <div className="menu-icon" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
};

export default Navigation;