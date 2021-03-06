import React, { useEffect, useState } from "react";
import PaginationComp from "./Pagination";
import PeopleDescription from "./PeopleDescription";
// import personalities from "./personalities.json";
import "./Personalities.scss";
import Navbar from "../Shared/Navbar/Navbar";
import JoinTheCauseRouter from "../Routes/JoinTheCauseRouter/JoinTheCauseRouter"

import vaccineLogo from "../../assets/vaccine-logo.svg"
import { Link } from 'react-router-dom';

export const Personalities = () => {
  document.title = "Signatories | Vaccine Common Good"

  // signatories data 
  
  const [personalities, setPersonalities] = useState([])
  
  let url = 'https://vaccine.yyventures.org/api/signatory?perpage=170'
  
  // let url = 'https://jsonplaceholder.typicode.com/users'

  const handleFetch = async ()=> {
    let res = await fetch(url)
    let data = await res.json()
    setPersonalities(data.responses)
  } 
  useEffect(()=> {
    handleFetch()
  }, [])

  const [posts] = useState(personalities);

  //const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = personalities.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className="personalities">
      <Navbar />
      <div className="personality-container">
      <div className="navbar-logo-mobile">
                    <Link to="/"><img src={vaccineLogo} alt="vaccine-logo" /></Link>
                </div>
        <div className="personalities-header d-flex align-items-center">
          <div className="col-md-4 header-feature-text"> 
            <div className="position-relative">
              <h1>Personalities</h1>
              <h1 className="stroke">Personalities</h1>
            </div>
            <p> Who Signed the Pledge </p>
          </div>
        </div>
        <div>
          <div className="row">{currentPosts.map((person) => {
            return <PeopleDescription
              known_for={person.designation}
              first_name={person.first_name}
              last_name={person.last_name}
              key={person.id}
              image={person.profile_image}
            />
          })}</div>
        </div>
        <div className="py-5">
          <div className="row pt-5">
            <PaginationComp
              postsPerPage={postsPerPage}
              totalPosts={personalities.length}
              paginate={paginate}
            />
            {}
          </div>
        </div>
      </div>
      <JoinTheCauseRouter/>
    </section>
  );
};