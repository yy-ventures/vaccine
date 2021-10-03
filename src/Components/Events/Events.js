import React from 'react';
import "./Events.scss";
import avaaz from "../../assets/avaaz.svg";
import newVaccine from "../../assets/new-vaccine.svg";

const Events = () => {
    return (
        <section className="events-section d-flex justify-content-center align-items-center">
            <div className="corner-yellow-circle"></div>
            <div className="events-container">
                <div className="events-header py-4">
                    <h2>events</h2>
                    <p>Our activities and events</p>
                </div>
                <div className="events-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-data">
                                <div className="avaaz-card-img">
                                    <img src={avaaz} alt="avaaz" />
                                </div>
                                <div className="avaaz-card-footer py-4 d-flex justify-content-center align-items-center">
                                    <h3>past events</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card-data">
                                <div className="vaccine-card-img">
                                    <img src={newVaccine} alt="new-vaccine" />
                                </div>
                                <div className="vaccine-card-footer py-4 d-flex justify-content-center align-items-center">
                                    <h3>upcoming events</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;