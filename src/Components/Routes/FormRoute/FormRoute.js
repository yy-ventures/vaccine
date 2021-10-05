import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import "./FormRoute.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'

const FormRoute = () => {
    return (
        <section className="form-route-section">
            <Navbar/>
            <div className="form-route-container">
                <div className="main-form">
                    <div className="main-form-header-section d-flex align-items-center">
                        <div className="main-form-header position-relative">
                            <div>
                                <h1>i pledge</h1>
                                <h1 className="stroke">i pledge</h1>
                            </div>
                            <p>Covid-19 Vaccine A Global Common Good Now</p>
                        </div>
                    </div>
                    <div className="main-form-body-section">
                        <form>
                            <div className="mt-5">
                                <h5><FontAwesomeIcon icon={faStarOfLife} /> marked fields are required.</h5>
                                <div className="row mt-5">
                                    <div className="col-md-5">
                                        <label>First Name: <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <input type="" name="" placeholder="" required />
                                    </div>
                                    <div className="col-md-5">
                                        <label>Last Name: <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <input type="" name="" placeholder="" required />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-5">
                                        <label>Email: <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <input type="" name="" placeholder="" required />
                                    </div>
                                    <div className="col-md-5">
                                        <label>Country <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <select className="form-select">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormRoute;