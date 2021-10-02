import React from 'react';
import "./About.scss"
import vaccineImg from "../../assets/vaccine.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <section className="about-section d-flex justify-content-center align-items-center">
            <div className="corner-blue-circle"></div>
            <div className="about-container">
                <div className="row h-100">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <div className="about-img-container">
                            <img src={vaccineImg} alt="vaccine-img" />
                        </div>
                    </div>
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <div className="about-data-container">
                            <div>
                                <h2 className="declare-header">Declare COVID-19 Vaccines</h2>
                                <h2 className="global-common-header">A Global Common Good</h2>
                            </div>
                            <div className="mt-5">
                                <p>We, the undersigned, make this joint appeal to all the global leaders, international organizations, and governments to adopt legal measures and make official statements declaring COVID-19 vaccines as a Global Common Good, free from any patent right belonging to anyone.
                                </p>
                            </div>
                            <div className="mt-5">
                                <a href="/">Learn more <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;