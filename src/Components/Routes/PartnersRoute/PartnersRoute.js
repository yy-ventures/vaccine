import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import "./PartnersRoute.scss";
import LogoSlider from './LogoSlider';
import peopleVaccine from "../../../assets/partners/vaccine-people.svg";
import avaaz from "../../../assets/partners/avaaz.svg";
import JoinTheCauseRouter from '../JoinTheCauseRouter/JoinTheCauseRouter';

const PartnersRoute = () => {
    document.title = "Partners | Vaccine Common Goods"
    return (
        <section className="partners-route-section">
            <Navbar/>
            <div className="partners-route-container">
                <div className="partners-route-header position-relative mt-5">
                    <h1>partners</h1>
                    <h1 className="stroke">partners</h1>
                </div>
                <div className="partners-route-body">
                    <div className="partners-route-brands">
                        <div className="row d-flex align-items-center mt-5">
                            <div className="col-md-3">
                                <img src={peopleVaccine} alt="people-vaccine" />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-6">
                                <p>A growing movement of health and humanitarian organisations, past and present world leaders, health experts, faith leaders and economists urging that when safe and effective vaccines are developed they are produced rapidly at scale and made available for all people, in all countries, free of charge.</p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center mt-5">
                            <div className="col-md-3">
                                <img src={avaaz} alt="people-vaccine" />
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-6">
                                <p>Avaaz empowers millions of people from all walks of life to take action on pressing global, regional and national issues, from corruption and poverty to conflict and climate change. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LogoSlider/>
            <JoinTheCauseRouter/>
        </section>
    );
};

export default PartnersRoute;