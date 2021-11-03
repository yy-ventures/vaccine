import React, { useEffect } from 'react';
import "./LaureatePeople.scss"
import laureateData from "../../../assets/Data/LaureateData/LaureateData.json"
import Aos from "aos"
import "aos/dist/aos.css"

const LaureatePeople = () => {
    useEffect(()=> {
        Aos.init({duration: 500})
    }, [])
    return (
        <div className="laureate-people-container">
            <div className="row p-3">
                {laureateData.map(laureate =>
                    <div className="col-md-4 people-image" data-aos="fade-right">
                        <img src={laureate.image} alt="laureate" />
                    </div>)}
            </div>
        </div>
    );
};

export default LaureatePeople;