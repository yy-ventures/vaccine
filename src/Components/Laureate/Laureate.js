import React from 'react';
import "./Laureate.scss"
import LaureatePeople from './LaureatePeople/LaureatePeople';

const Laureate = () => {
    return (
        <section className="section-laureate d-flex justify-content-center align-items-center"> 
            <div className="corner-red-circle"></div>
            <div className="laureate-container">
                <div className="row h-100">
                    <div className="col-md-6 bg-danger">
                        <LaureatePeople/>
                    </div>
                    <div className="col-md-6 bg-dark">
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Laureate;