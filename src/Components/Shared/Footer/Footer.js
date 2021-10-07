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
        Aos.init({duration: 2000})
    }, [])
    return (
        <footer className="footer-section d-flex justify-content-center align-items-center">
            <div className="footer-logo" data-aos="fade-right">
                <img src={footerLogo} alt="footer-logo"/>
            </div>
            <div className="footer-content text-center">
                <div className="footer-content-social" data-aos="fade-up">
                    <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="/"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
                <div className="footer-content-menu mt-4" data-aos="fade-up">
                    <a href="/">Home</a>
                    <a href="/">Signatories</a>
                    <a href="/">Events</a>
                    <a href="/">Partners</a>
                    <a href="/">Join</a>
                </div>
                <div className="footer-content-bottom mt-5">
                    <p><FontAwesomeIcon icon={faCopyright} /> 2020 Yunus Centre. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;