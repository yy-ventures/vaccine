import About from '../../About/About';
import Activities from '../../Activities/Activities';
import Events from '../../Events/Events';
import Header from '../../Header/Header';
import JoinTheCause from '../../JoinTheCause/JoinTheCause';
import Laureate from '../../Laureate/Laureate';
import Partners from '../../Partners/Partners';
import TestimonialSlider from '../../TestimonialsSlider/TestimonialSlider';

const HomeRoute = () => {
    document.title = "Home | Vaccine Common Goods";
    return (
        <>
            <Header/>
            <About/>
            <Laureate/>
            <Activities/>
            <TestimonialSlider/>
            <Events/>
            <Partners/>
            <JoinTheCause/>
        </>
    );
};

export default HomeRoute;