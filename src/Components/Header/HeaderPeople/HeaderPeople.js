import React, { useEffect, useState } from 'react';
import "./HeaderPeople.scss";
import malala from "../../../assets/people/yousafzai.png"
import mairead from "../../../assets/people/mairead.jpg"
import { useRef } from 'react/cjs/react.development';
import firstFivePeople from "../../../assets/Data/PeopleData/FirstFivePeopleData.json"
import secondFivePeople from "../../../assets/Data/PeopleData/SecondFivePeopleData.json"
import { motion } from "framer-motion"

const HeaderPeople = () => {
    const [firstIndex, setFirstIndex] = useState(0)
    const [secondIndex, setSecondIndex] = useState(0)
    const firstTimeoutRef = useRef(null)
    const secondTimeoutRef = useRef(null)
    const firstDelay = 2300
    const secondDelay = 4700
    
    const firstResetTimeout = () => {
        if(firstTimeoutRef.current){
            clearTimeout(firstTimeoutRef.current)
        }
    }
    const secondResetTimeout = () => {
        if(secondTimeoutRef.current){
            clearTimeout(secondTimeoutRef.current)
        }
    }
    useEffect(()=>{
        firstResetTimeout()
        firstTimeoutRef.current = setTimeout(()=> setFirstIndex((prevIndex) => 
            prevIndex === firstFivePeople.length - 1 ? 0 : prevIndex + 1
        ), firstDelay)
        return ()=> {
            firstResetTimeout()
        }
    }, [firstIndex])

    useEffect(()=>{
        secondResetTimeout()
        secondTimeoutRef.current = setTimeout(()=> setSecondIndex((prevIndex) => 
            prevIndex === secondFivePeople.length - 1 ? 0 : prevIndex + 1
        ), secondDelay)
        return ()=> {
            secondResetTimeout()
        }
    }, [secondIndex])

    // motion
    const variantsOne = {hidden: {opacity: 0, y: -80}, visible: {opacity: 1, y: 0}}
    const variantsTwo = {hidden: {opacity: 0, y: 80}, visible: {opacity: 1, y: 0}}
    const variantsThree = {hidden: {opacity: 0, x: -80}, visible: {opacity: 1, x: 0}}
    const variantsFour = {hidden: {opacity: 0}, visible: {opacity: 1}}
    const variantsFive = {hidden: {opacity: 0, y: -90}, visible: {opacity: 1, y: 0}}
    const variantsSix = {hidden: {opacity: 0, x: 100}, visible: {opacity: 1, x: 0}}

    return (
        <div className="row people-container">
            <div className="col-md-6 left-side-people position-relative">
                <motion.div initial="hidden" animate="visible" variants={variantsOne} transition={{ duration: 0.5 }} className="left-person-one slideshow">
                    <div className="slideshowSlider" style={{ transform: `translate3d(${-secondIndex * 100}%, 0, 0)` }}>
                        {secondFivePeople.map((peopleImage, index) =>
                            <div className="slide" key={index}>
                                <img src={peopleImage.image} alt="background" />
                            </div>)}
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={variantsTwo} transition={{ duration: 0.5 }} className="left-person-two d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h2>147</h2>
                        <p>countries</p>
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={variantsThree} transition={{ duration: 0.5 }} className="left-person-three">
                    <img src={malala} alt="malala" />
                </motion.div>
            </div>
            <div className="col-md-6 right-side-people position-relative">
                <motion.div initial="hidden" animate="visible" variants={variantsFour} transition={{ duration: 0.9 }}className="right-person-one slideshow">
                    <div className="slideshowSlider" style={{ transform: `translate3d(${-firstIndex * 100}%, 0, 0)` }}>
                        {firstFivePeople.map((peopleImage, index) => 
                            <div className="slide" key={index}>
                                <img src={peopleImage.image} alt="background" />
                            </div>)}
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={variantsFive} transition={{ duration: 0.5 }} className="right-person-two d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h2>156</h2>
                        <p>signatories</p>
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={variantsSix} transition={{ duration: 0.5 }}  className="right-person-three">
                    <img src={mairead} alt="mairead" />
                </motion.div>
            </div>
        </div>
    );
};

export default HeaderPeople;
