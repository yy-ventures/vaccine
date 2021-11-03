import React, { useEffect } from 'react';
import "./Activities.scss"
import blueHand from "../../assets/blue-hand.svg"
import redMagnify from "../../assets/red-magnify.svg"
import yellowRight from "../../assets/yellow-right.svg"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Activities = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className="section-activities">
            <div className="activity-container">
                <div className="row h-100">
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="text-center">
                            <HashLink to="/activities#activities-right"><img src={blueHand} alt="blue-hand"/></HashLink>
                            <p>Right to Free Access <br/> to the Vaccine for All</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="text-center">
                            <HashLink to="/activities#activities-transparency"><img src={redMagnify} alt="red-magnify"/></HashLink>
                            <p>Transparency in Determining <br/> Fair Return on Research <br/> Investments</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="text-center">
                            <HashLink to="/activities#activities-action"><img src={yellowRight} alt="yellow-right"/></HashLink>
                            <p>World Action Plan <br/> on COVID-19 Vaccine</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;

