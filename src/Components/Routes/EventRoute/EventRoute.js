import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import "./EventRoute.scss"
import upcomingEvents from "../../../assets/upcoming-events.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import avaazBlack from "../../../assets/avaaz-black.png";
import ppvImg from "../../../assets/ppv.png"
import JoinTheCauseRouter from '../JoinTheCauseRouter/JoinTheCauseRouter';

import vaccineLogo from "../../../assets/vaccine-logo.svg"
import { Link, NavLink } from 'react-router-dom';

const EventRoute = () => {
    document.title = "Events | Vaccine Common Good"
    return (
        <section className="events-route-section">
            <Navbar/>
            <div className="events-route-section-container py-5">
            <div className="navbar-logo-mobile">
                    <Link to="/"><img src={vaccineLogo} alt="vaccine-logo" /></Link>
                </div>
                <div className="ongoing-events">
                    <div className="ongoing-events-header">
                        <h1>On going events</h1>
                    </div>
                    <div className="ongoing-events-body mt-5">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 ongoing-events-body-data">
                                <div><a href="https://peoplesvaccine.org/g20/" target="_blank" rel="noreferrer"><img src={ppvImg} alt="ppv"/></a></div>
                                <div className="p-4">
                                    <h5>In the race against COVID-19</h5>
                                    <p>None of us will cross the finish line unless we all do.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 ongoing-events-body-data">
                            <div><a href="https://peoplesvaccine.org/g20/" target="_blank" rel="noreferrer"><img src={ppvImg} alt="ppv"/></a></div>
                                <div className="p-4">
                                    <h5>In the race against COVID-19</h5>
                                    <p>None of us will cross the finish line unless we all do.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 ongoing-events-body-data">
                            <div><a href="https://peoplesvaccine.org/g20/" target="_blank" rel="noreferrer"><img src={ppvImg} alt="ppv"/></a></div>
                                <div className="p-4">
                                    <h5>In the race against COVID-19</h5>
                                    <p>None of us will cross the finish line unless we all do.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="events-route-header position-relative mt-5">
                    <div>
                        <h1>upcoming events</h1>
                        <h1 className="stroke">upcoming events</h1>
                    </div>
                    <div className="mt-5">
                        <img src={upcomingEvents} alt="upcoming-events"/>
                    </div>
                    <div className="mt-5">
                        <h4>Rally at Times Square</h4>
                        <p>On Sunday, 29th of this month a human rally took place near the Times Square. A number of 350 people gathered for a common demand of declaring the COVID-19 vaccine common good.</p>
                        <p>A year ago, the barrier to beating this cruel disease was science. Today it is inequality. We have the ability to vaccinate the world and to end this pandemic. But instead, rich countries are hoarding vaccines and protecting the profits of their pharmaceutical corporations instead of saving lives.</p>
                        <p>Rich countries have bought more vaccine doses than they could ever use – while the rest of the world has minimal access to protection. A handful of pharmaceutical corporations dictate the manufacturing, distribution, and cost of the vaccine – they get to decide who lives and who dies- despite the fact that they created many of these vaccines with public money.</p>
                    </div>
                    <div className="mt-5 text-end">
                        <a href="/">See more <FontAwesomeIcon icon={faChevronRight} /></a>
                    </div>
                </div>
                <div className="events-route-footer py-5">
                    <h4>past events</h4>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <a href="https://secure.avaaz.org/page/en/" target="_blank" rel="noreferrer">
                                <div>
                                    <div>
                                        <img src={avaazBlack} alt="avaaz" />
                                        <div className="d-flex align-items-center justify-content-center p-3 text-center box-footer">
                                            <h4>AVAAZ launches new campaign</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <p>On Sunday, 29th of this month a human rally took place near
                                            the Times Square. A number of 350 people gathered for a common
                                            demand of declaring the COVID-19 vaccine common good.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <a href="https://peoplesvaccine.org/" target="_blank" rel="noreferrer">
                                <div>
                                    <img src={ppvImg} alt="ppv-img" />
                                    <div className="d-flex align-items-center justify-content-center p-3 text-center box-footer">
                                        <h4>PVA rallies for free Vaccine shots</h4>
                                    </div>
                                </div>
                                <div>
                                    <p>On Sunday, 29th of this month a human rally took place near
                                        the Times Square. A number of 350 people gathered for a common
                                        demand of declaring the COVID-19 vaccine common good.</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
            <JoinTheCauseRouter/>
        </section>
    );
};

export default EventRoute;