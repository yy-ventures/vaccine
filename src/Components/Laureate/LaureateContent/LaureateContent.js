import React from 'react';
import "./LaureateContent.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const LaureateContent = () => {
    return (
        <div className="laureate-content-container p-3 h-100 d-flex align-items-center">
            <div className="d-flex flex-column">
                <div className="mt-4">
                    <p>List of</p>
                    <h3>personalities</h3>
                    <p>Who Signed the Pledge</p>
                </div>
                <div className="mt-4">
                    <h2 className="laureate-count">25</h2>
                    <h5>Noble Laureates</h5>
                </div>
                <div className="mt-4">
                    <h2>33 <FontAwesomeIcon icon={faPlus} /></h2>
                    <h5>Former Heads of State & Government, <br/> Business Leaders, Celebrities, Academic <br/> Experts and Social Activists</h5>
                </div>
                <div className="mt-4">
                    <a href="/">view full list <FontAwesomeIcon icon={faChevronRight}/></a>
                </div>
            </div>
        </div>
    );
};

export default LaureateContent;