import React from 'react';
import "./Activities.scss"
import blueHand from "../../assets/blue-hand.svg"
import redMagnify from "../../assets/red-magnify.svg"
import yellowRight from "../../assets/yellow-right.svg"

const Activities = () => {
    return (
        <section className="section-activities">
            <div className="activity-container">
                <div className="row h-100">
                    <div className="col-md-4">
                        <div className="text-center">
                            <img src={blueHand} alt="blue-hand"/>
                            <p>Right to Free Access <br/> to the Vaccine for All</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <img src={redMagnify} alt="red-magnify"/>
                            <p>Transparency in Determining <br/> Fair Return on Research <br/> Investments</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <img src={yellowRight} alt="yellow-right"/>
                            <p>World Action Plan <br/> on COVID-19 Vaccine</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;

