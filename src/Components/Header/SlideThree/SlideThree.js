import React, { useEffect, useRef, useState } from 'react';
import thirdFivePeople from "../../../assets/Data/PeopleData/ThirdFivePeopleData";

const SlideThree = () => {
    const [secondIndex, setSecondIndex] = useState(0)
    const secondTimeoutRef = useRef(0)
    const secondDelay = 4700
    
    const secondResetTimeout = () => {
        if(secondTimeoutRef.current){
            clearTimeout(secondTimeoutRef.current)
        }
    }

    useEffect(()=>{
        secondResetTimeout()
        secondTimeoutRef.current = setTimeout(()=> setSecondIndex((prevIndex) => 
            prevIndex === thirdFivePeople.length - 1 ? 0 : prevIndex + 1
        ), secondDelay)
        return ()=> {
            secondResetTimeout()
        }
    }, [secondIndex])
    return (
        <div className="slideshowSlider" style={{ transform: `translate3d(${-secondIndex * 100}%, 0, 0)` }}>
            {thirdFivePeople.map((peopleImage, index) =>
                <div className="slide" key={index}>
                    <img src={peopleImage.image} alt="background" />
                </div>)}
        </div>
    );
};

export default SlideThree;