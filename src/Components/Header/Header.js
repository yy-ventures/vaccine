import Navbar from '../Shared/Navbar/Navbar';
import "./Header.scss"
import HeaderPeople from './HeaderPeople/HeaderPeople';
import vaccineLogo from "../../assets/vaccine-logo.svg"
import { Link } from 'react-router-dom';
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
                        </div>
                    </div>
                    <div className="col-md-8">
                        <HeaderPeople/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;