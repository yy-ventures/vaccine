import React from 'react';
import "./JoinTheCause.scss";

const JoinTheCause = () => {
    return (
        <section className="join-the-cause-section d-flex align-items-center justify-content-end">
            <div className="join-the-cause-content">
                <h2>join the cause</h2>
                <p>Help us achieve our goal to <br/> secure a better future for all</p>
            </div>
            <div className="join-the-cause-btn">
                <button>pledge now</button>
            </div>
        </section>
    );
};

export default JoinTheCause;