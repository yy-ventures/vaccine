import React from 'react';
import { Link } from 'react-router-dom';
import "./JoinTheCauseRoute.scss"

const JoinTheCauseRouter = () => {
    return (
        <section className="join-the-cause-router-section d-flex justify-content-around align-items-center flex-column flex-lg-row flex-md-row">
            <div className="text-center">
                <h2>join the movement</h2>
                <p>Act to help achieve COVID-19 vaccines <br/> accessibility for all</p>
            </div>
            <div>
                <Link to="/pledge"><button>pledge now</button></Link>
            </div>
        </section>
    );
};

export default JoinTheCauseRouter;