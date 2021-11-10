import React, { useEffect, useRef, useState } from 'react';
import mobilePeople from "../../../assets/Data/PeopleData/MobilePeople.json"
import "./SliderMobile.scss";

const SliderMobile = () => {
    const [firstIndex, setFirstIndex] = useState(0)
    const firstTimeoutRef = useRef(0)
    const firstDelay = 1500
    const firstResetTimeout = () => {
        if(firstTimeoutRef.current){
            clearTimeout(firstTimeoutRef.current)
        }
    }
    useEffect(()=>{
        firstResetTimeout()
        firstTimeoutRef.current = setTimeout(()=> setFirstIndex((prevIndex) => 
            prevIndex === mobilePeople.length - 1 ? 0 : prevIndex + 1
        ), firstDelay)
        return ()=> {
            firstResetTimeout()
        }
    }, [firstIndex])
    return (
        <div className="slideshowSlider" style={{ transform: `translate3d(${-firstIndex * 100}%, 0, 0)` }}>
            {mobilePeople.map((peopleImage, index) =>
                <div className="slide" key={index}>
                    <img src={peopleImage.image} alt="background" />
                </div>)}
        </div>
    );
};

export default SliderMobile;