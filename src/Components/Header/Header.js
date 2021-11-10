import Navbar from '../Shared/Navbar/Navbar';
import "./Header.scss"
import HeaderPeople from './HeaderPeople/HeaderPeople';
import vaccineLogo from "../../assets/vaccine-logo.svg"
import { Link } from 'react-router-dom';
import SliderFirst from './SliderFirst/SliderFirst';
import SliderMobile from './SliderMobile/SliderMobile';
const Header = () => {
    return (
        <header>
            <Navbar/>
            <div className="header-container">
                <div className="navbar-logo-mobile">
                    <Link to="/"><img src={vaccineLogo} alt="vaccine-logo" /></Link>
                </div>
                <div className="row h-100">
                    <div className="col-md-4 header-feature-text d-flex align-items-center">
                        <div>
                            <h4>declare</h4>
                            <h3>COVID-19 Vaccines</h3>
                            <div className="position-relative">
                                <h1>a global</h1>
                                <h1 className="stroke">a global</h1>
                            </div>
                            <div className="position-relative">
                                <h1>common</h1>
                                <h1 className="stroke">common</h1>
                            </div>
                            <div className="position-relative">
                                <h1>good</h1>
                                <h1 className="stroke">good</h1>
                            </div>
                            <div>
                                <p>Over <span className="red-million">2.7 million</span> online pledges <span className="signed-bold">signed globally</span></p>
                            </div>
                            {/* mobile slider */}
                            <div className="mobile-slider-container mt-5">
                                <SliderMobile/>
                            </div>
                            {/* mobile signatories and countries */}
                            <div className="row mt-3 mobile-data-container">
                                <div className="col-6">
                                    <Link to="/people-pledge">
                                        <div className="mobile-country">
                                            <div>
                                                <h5>147</h5>
                                                <h6>Countries</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 p-0">
                                    <Link to="/signatories">
                                        <div className="mobile-signatories me-4">
                                            <div>
                                                <h5>156</h5>
                                                <h6>Signatories</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <HeaderPeople />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;