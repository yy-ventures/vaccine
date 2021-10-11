import React, { useEffect } from 'react';
import "./JoinTheCause.scss";
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

const JoinTheCause = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])
    return (
        <section className="join-the-cause-section d-flex align-items-center justify-content-end">
            <div className="join-the-cause-content" data-aos="fade-down">
                <h2>join the cause</h2>
                <p>Help us achieve our goal to <br/> secure a better future for all</p>
            </div>
            <div className="join-the-cause-btn" data-aos="fade-up">
                <Link to="/pledge"><button>pledge now</button></Link>
            </div>
        </section>
    );
};

export default JoinTheCause;