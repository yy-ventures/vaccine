import "./HeaderPeople.scss";
import malala from "../../../assets/people/yousafzai.png"
import mairead from "../../../assets/people/mairead.jpg"
import yunus from "../../../assets/people/yunus.jpg";
import "./HeaderPeople.scss";
import { motion } from "framer-motion"
import SliderFirst from '../SliderFirst/SliderFirst';
import SliderSecond from '../SliderSecond/SliderSecond';
import SlideThree from "../SlideThree/SlideThree";

const HeaderPeople = () => {
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
                    <SliderFirst/>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={variantsTwo} transition={{ duration: 0.5 }} className="left-person-two d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h2>147</h2>
                        <p>countries</p>
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={variantsThree} transition={{ duration: 0.5 }} className="left-person-three slideshow">
                    <SliderSecond/>
                </motion.div>
            </div>
            <div className="col-md-6 right-side-people position-relative">
                <motion.div initial="hidden" animate="visible" variants={variantsFour} transition={{ duration: 0.9 }} className="right-person-one slideshow">
                    <img src={yunus} alt="yunus"/>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={variantsFive} transition={{ duration: 0.5 }} className="right-person-two d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h2>156</h2>
                        <p>signatories</p>
                    </div>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={variantsSix} transition={{ duration: 0.5 }}  className="right-person-three">
                    <SlideThree/>
                </motion.div>
            </div>
        </div>
    );
};

export default HeaderPeople;
