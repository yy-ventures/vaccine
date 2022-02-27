import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import "./PledgeRoute.scss";
import JoinTheCauseRouter from '../JoinTheCauseRouter/JoinTheCauseRouter';
import vaccineLogo from "../../../assets/vaccine-logo.svg"
import { Link } from 'react-router-dom';
import avatar from '../../../assets/person.png'
import paginateStyle from './paginate.module.scss'
import ReactPaginate from 'react-paginate';

const PledgeRoute = () => {

    const [plData, setPlData] = useState([])

    let siteUrl = 'https://vaccine.yyventures.org' 

    const [isPending, setIsPending] = useState(false)
    const [pageLimit, setPageLimit] = useState(0)
    const [countryCount, setCountryCount] = useState(0)
    const [newPageCount, setNewPageCount] = useState(0)

    const handlePlFetch = async () => {
        const res = await fetch(`https://vaccine.yyventures.org/api/common-people?page=1&perpage=50&country=0`)
        const data = await res.json()
        // const totalResponse = res.headers.get('x-total-count')
        // let totalPartialResponse = Math.ceil(totalResponse / 12)
        setPlData(data.responses)
        setPageLimit(1000)
    }

    useEffect(() => {
        handlePlFetch()
    }, [])

    // const HandlePerPage = useCallback( async (currentPage) => {
    //     setIsPending(true)
    //     const res = await fetch(`https://vaccine.yyventures.org/api/common-people?page=${currentPage}&perpage=50&country=${countryCount}`)
    //     const data = await res.json()
    //     return data
    // }, [countryCount])

    // const HandlePerPage = async (currentPage) => {
    //     setIsPending(true)
    //     const res = await fetch(`https://vaccine.yyventures.org/api/common-people?page=${currentPage}&perpage=50&country=${countryCount}`)
    //     const data = await res.json()
    //     return data
    // }
    
    const handlePageClick = (count) => {
        let newCount = parseInt(count.selected) + 1
        // const fetchPerPage = await HandlePerPage(newCount)
        // setPlData(fetchPerPage.responses)
        // setIsPending(false)
        setNewPageCount(newCount)
    }

    // get countries
    const [country, setCountry] = useState([])
    
    const getAllCountry = async () => {
        const res = await fetch('https://vaccine.yyventures.org/api/country')
        const data = await res.json()
        setCountry(data.responses)
    }

    useEffect(()=> {
        getAllCountry()
    }, [])

    useEffect(()=> {
        setIsPending(true)
        fetch(`https://vaccine.yyventures.org/api/common-people?page=${newPageCount}&perpage=50&country=${countryCount}`)
            .then(res => res.json())
            .then(data => {
                setPlData(data.responses)
                setIsPending(false)
            })
    }, [newPageCount, countryCount])
    
    // handle country change
    const handleCountry = e => {
        e.preventDefault()
        setCountryCount(parseInt(e.target.value))
    }

    return (
        <section className="pledge-route-section">
            <Navbar />
            <div className="pledge-route-container py-5">
            <div className="navbar-logo-mobile">
                    <Link to="/"><img src={vaccineLogo} alt="vaccine-logo" /></Link>
                </div>
                <div className="main-pledge-header-section d-flex align-items-lg-center justify-content-lg-between align-items-md-center justify-content-md-between flex-column flex-lg-row flex-md-row">
                    <div>
                        <div className="main-pledge-header position-relative">
                            <div>
                                <h1>i pledge</h1>
                                <h1 className="stroke">i pledge</h1>
                            </div>
                            <p>Covid-19 Vaccine A Global Common Good Now</p>
                        </div>
                    </div>
                    <div>
                        <select className="form-select" onChange={handleCountry}>
                            <option selected value="0">All Country</option>
                            {country.map(singleCountry => <option value={singleCountry.id}>{singleCountry.country_name}</option>)}
                        </select>
                    </div>
                </div>
                <div className="main-pledge-body-section">
                    {isPending && <p>Loading...</p>}
                    <div className="row">
                        {plData && plData.map(plDataN => <div className="col-lg-4 col-md-6 col-6 mt-4">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-3">
                                    <div className="pledge-people-image">
                                        {plDataN.profile_image === siteUrl ? <img src={avatar} alt={plDataN.first_name} />: <img src={plDataN.profile_image} alt={plDataN.first_name}/>}
                                    </div>
                                </div>
                                <div className="col-md-9 mt-4 ps-4">
                                    <div>
                                        <h5>{plDataN.first_name}</h5>
                                        <p>{plDataN.organization}, {plDataN.country}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
                <div className='main-pledge-footer-section'>
                <ReactPaginate
                    previousLabel={''} 
                    previousClassName={'fa-solid fa-angles-left'}
                    nextLabel={''}
                    nextClassName={'fa-solid fa-angles-right'}
                    breakLabel={'...'}
                    pageCount={pageLimit}
                    marginPagesDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={paginateStyle.ul_container}
                    pageClassName={paginateStyle.btn}
                    pageLinkClassName={paginateStyle.link}
                    activeClassName={paginateStyle.active}
                    disabledClassName={paginateStyle.disabled}
                />
                </div>
            </div>
            <JoinTheCauseRouter/>
        </section>
    );
};

export default PledgeRoute;