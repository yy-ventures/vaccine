import React from 'react';
import { Link } from 'react-router-dom';
import "./JoinTheCauseRoute.scss"

const JoinTheCauseRouter = () => {
    return (
        <section className="join-the-cause-router-section d-flex justify-content-around align-items-center">
            <div className="text-center">
                <h2>join the cause</h2>
                <p>Help us achieve our goal to secure <br/> a better future for all</p>
            </div>
            <div>
                <Link to="/pledge"><button>pledge now</button></Link>
            </div>
        </section>
    );
};

export default JoinTheCauseRouter;