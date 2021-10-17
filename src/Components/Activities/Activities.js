import React, { useEffect } from 'react';
import "./Activities.scss"
import blueHand from "../../assets/blue-hand.svg"
import redMagnify from "../../assets/red-magnify.svg"
import yellowRight from "../../assets/yellow-right.svg"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

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
                            <Link to="/activities"><img src={blueHand} alt="blue-hand"/></Link>
                            <p>Right to Free Access <br/> to the Vaccine for All</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="text-center">
                            <Link to="/activities"><img src={redMagnify} alt="red-magnify"/></Link>
                            <p>Transparency in Determining <br/> Fair Return on Research <br/> Investments</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="text-center">
                            <Link to="/activities"><img src={yellowRight} alt="yellow-right"/></Link>
                            <p>World Action Plan <br/> on COVID-19 Vaccine</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;

