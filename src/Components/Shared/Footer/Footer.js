import React, { useEffect } from 'react';
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import footerLogo from "../../../assets/yc-logo-footer.svg"
import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {
    useEffect(()=> {
        Aos.init({duration: 500, disable: 'mobile'}) 
    }, [])
    return (
        <footer className="footer-section d-flex justify-content-center align-items-center">
            <div className="footer-logo" data-aos="fade-right">
                <img src={footerLogo} alt="footer-logo"/>
            </div>
            <div className="footer-content text-center">
                <div className="footer-content-social" data-aos="fade-up">
                    <a href="https://www.facebook.com/YunusCentre"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.instagram.com/yunuscentre/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://twitter.com/Yunus_Centre"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.youtube.com/c/MuhammadYunus"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://www.linkedin.com/YunusCentre?_l=en_US"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
                <div className="footer-content-menu mt-4" data-aos="fade-up">
                    <a href="/">Home</a>
                    <a href="/signatories">Signatories</a>
                    <a href="/events">Events</a>
                    <a href="/partners">Partners</a>
                    <a href="/pledge">Join</a>
                </div>
                <div className="footer-content-bottom mt-5">
                    <p><FontAwesomeIcon icon={faCopyright} /> 2020 Yunus Centre. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;