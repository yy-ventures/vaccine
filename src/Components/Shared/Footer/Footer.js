import React from 'react';
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-content-social">
                    <a href="/"></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;