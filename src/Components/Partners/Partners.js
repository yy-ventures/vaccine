import React, { useEffect } from 'react';
import "./Partners.scss"
import vaccinePeople from "../../assets/partners/vaccine-people.svg"
import avaaz from "../../assets/partners/avaaz.svg"
import Aos from "aos"
import "aos/dist/aos.css"

const Partners = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])
    let peopleVaccineLink = 'https://peoplesvaccine.org/take-action/'
    let avaazLink = 'https://secure.avaaz.org/campaign/en/peoples_vaccine_2021_loc/?fpbr'

    return (
        <section className="partners-section">
            <div className="partners-section-header text-center">
                <h2 className="py-5">partners</h2>
            </div>
            <div className="partners-section-body d-flex justify-content-around align-items-center">
                <a href={peopleVaccineLink} target="_blank" rel="noreferrer"><img src={vaccinePeople} alt="vaccine-people" data-aos="fade-up"/></a>
                <a href={avaazLink} target="_blank" rel="noreferrer"><img src={avaaz} alt="vaccine-people" data-aos="fade-up"/></a>
            </div>
        </section>
    );
};

export default Partners;