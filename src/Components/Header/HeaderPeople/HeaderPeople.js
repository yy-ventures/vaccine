import React from 'react';
import "./HeaderPeople.scss";
import malala from "../../../assets/people/yousafzai.jpg"
import thaler from "../../../assets/people/thaler.jpg"
import dubochet from "../../../assets/people/dubochet.jpg"
import yunus from "../../../assets/people/yunus.jpg"
const HeaderPeople = () => {
    return (
        <div className="row people-container">
            <div className="col-md-6 left-side-people position-relative">
                <div className="left-person-one">
                    <img src={dubochet} alt="dubochet" />
                </div>
                <div className="left-person-two d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h2>147</h2>
                        <p>countries</p>
                    </div>
                </div>
                <div className="left-person-three">
                    <img src={malala} alt="malala" />
                </div>
            </div>
            <div className="col-md-6 right-side-people position-relative">
                <div className="right-person-one">
                    <img src={yunus} alt="yunus" />
                </div>
                <div className="right-person-two d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h2>156</h2>
                        <p>signatories</p>
                    </div>
                </div>
                <div className="right-person-three">
                    <img src={thaler} alt="thaler" />
                </div>
            </div>
        </div>
    );
};

export default HeaderPeople;