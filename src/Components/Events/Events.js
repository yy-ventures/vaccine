import React, { useEffect } from 'react';
import "./Events.scss";
import avaaz from "../../assets/avaaz.svg";
import newVaccine from "../../assets/new-vaccine.svg";
import Aos from "aos"
import "aos/dist/aos.css"

const Events = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className="events-section d-flex justify-content-center align-items-center">
            <div className="corner-yellow-circle"></div>
            <div className="events-container d-flex align-items-center">
                <div>
                    <div className="events-header py-4">
                        <h2>events</h2>
                        <p>Our activities and events</p>
                    </div>
                    <div className="events-body">
                        <div className="row">
                            <div className="col-md-6 mt-3" data-aos="fade-left">
                                <a href="https://peoplesvaccine.org/">
                                    <div className="card-data">
                                        <div className="vaccine-card-img">
                                            <img src={newVaccine} alt="new-vaccine" />
                                        </div>
                                        <div className="vaccine-card-footer py-4 d-flex justify-content-center align-items-center">
                                            <h3>upcoming events</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 mt-3" data-aos="fade-right">
                                <a href="https://secure.avaaz.org/page/en/">
                                    <div className="card-data">
                                        <div className="avaaz-card-img">
                                            <img src={avaaz} alt="avaaz" />
                                        </div>
                                        <div className="avaaz-card-footer py-4 d-flex justify-content-center align-items-center">
                                            <h3>past events</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;