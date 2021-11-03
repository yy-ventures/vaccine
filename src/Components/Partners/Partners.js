import React, { useEffect } from 'react';
import "./Partners.scss"
import vaccinePeople from "../../assets/partners/vaccine-people.svg"
import avaaz from "../../assets/partners/avaaz.svg"
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

const Partners = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className="partners-section">
            <div className="partners-section-header text-center">
                <h2 className="py-5">partners</h2>
            </div>
            <div className="partners-section-body d-flex justify-content-around align-items-center">
                <a href="https://peoplesvaccine.org/take-action/"><img src={vaccinePeople} alt="vaccine-people" data-aos="fade-right"/></a>
                <a href="https://secure.avaaz.org/campaign/en/peoples_vaccine_2021_loc/?fpbr"><img src={avaaz} alt="vaccine-people" data-aos="fade-left"/></a>
            </div>
        </section>
    );
};

export default Partners;