import React from 'react';
import "./LaureatePeople.scss"
import laureateData from "../../../assets/Data/LaureateData/LaureateData.json"

const LaureatePeople = () => {
    return (
        <div className="laureate-people-container">
            <div className="row p-3">
                {laureateData.map(laureate =>
                    <div className="col-md-4 people-image">
                        <img src={laureate.image} alt="laureate" />
                    </div>)}
            </div>
        </div>
    );
};

export default LaureatePeople;