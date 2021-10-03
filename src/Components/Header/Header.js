import React from 'react';
import Navbar from '../Navbar/Navbar';
import Navigation from '../Navigation/Navigation';
import "./Header.scss"
import HeaderPeople from './HeaderPeople/HeaderPeople';

const Header = () => {
    const widthResponse = document.body.scrollWidth;
    return (
        <header>
            {widthResponse > 900 ? <Navbar/> : <Navigation/>}
            <div className="header-container">
                <div className="row h-100">
                    <div className="col-md-4 header-feature-text d-flex align-items-center">
                        <div>
                            <h4>declare</h4>
                            <h3>COVID-19 Vaccines</h3>
                            <div className="position-relative">
                                <h1>a global</h1>
                                <h1 className="stroke">a global</h1>
                            </div>
                            <div className="position-relative">
                                <h1>common</h1>
                                <h1 className="stroke">common</h1>
                            </div>
                            <div className="position-relative">
                                <h1>good</h1>
                                <h1 className="stroke">good</h1>
                            </div>
                            <div>
                                <p>Over 2.7 million online pledges signed globally. *</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <HeaderPeople/>
                    </div>
                </div>
            </div>
            <div className="corner-blue-circle"></div>
        </header>
    );
};

export default Header;