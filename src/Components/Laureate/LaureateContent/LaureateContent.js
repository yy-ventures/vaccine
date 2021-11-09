import React, { useEffect } from 'react';
import "./LaureateContent.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

const LaureateContent = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className="laureate-content-container p-3 h-100 d-flex align-items-center" data-aos="fade-right">
            <div className="d-flex flex-column">
                <div className="mt-4">
                    <h3>156 GLOBAL PERSONALITIES</h3>
                    <p>Have Signed the Pledge</p>
                </div>
                <div className="mt-3"><h4>Including</h4></div>
                <div className="row">
                    <div className="col-lg-5 d-flex align-items-center">
                        <h2 className="laureate-count">25</h2>
                        <h5 className="ps-3">Nobel <br/> Laureates</h5>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <h2>42</h2>
                        <h5 className="ps-3">Former Heads of <br/> State & Government</h5>
                    </div>
                </div>
                <div className="mt-4 d-flex align-items-center">
                    <h2 className="yellow">89</h2>
                    <h5 className="ps-3">Global Celebrities <br/> & Leaders in Business, Politics <br/> Media, Arts and Activism</h5>
                </div>
                <div className="mt-4">
                    <Link to="/signatories">view full list <FontAwesomeIcon icon={faChevronRight}/></Link>
                </div>
            </div>
        </div>
    );
};

export default LaureateContent;