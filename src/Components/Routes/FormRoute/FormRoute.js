import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import "./FormRoute.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import CountrySelect from '../../Pledge/CountrySelect';

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
                                            <CountrySelect/>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <h5>Other Information(Optional)</h5>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-5">
                                        <label>Organization: <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <input type="" name="" placeholder="" required />
                                    </div>
                                    <div className="col-md-5">
                                        <label>Destination: <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <input type="" name="" placeholder="" required />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-5">
                                        <label>Age: <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <input type="" name="" placeholder="" required />
                                    </div>
                                    <div className="col-md-5">
                                        <label>Gender: <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <input type="" name="" placeholder="" required />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-5">
                                        <label>Profile Picture <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <input type="file" name="" placeholder="" required />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-5">
                                        <label>Permission To Use Your Pledge <FontAwesomeIcon icon={faStarOfLife} /></label>
                                        <input type="checkbox" name="" placeholder="" required />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-5">
                                        <button class="btn btn-info">I Pledge</button>
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