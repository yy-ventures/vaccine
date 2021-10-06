import React, { useState } from "react";
import PersonSmall from "./PersonSmall";

import personalities from "./people.json";

import "./Pledge.scss";

import leymah from "../../assets/people/leymah.jpg";
import image1 from "../../assets/people/desmond.jpg";
import image2 from "../../assets/people/carlos.jpg";
import Navbar from "../Shared/Navbar/Navbar";
import CountrySelect from "./CountrySelect";


export default function Personalities() {  
    const [posts, setPosts] = useState(personalities);
    //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

    const personalitiesArray = [];
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    console.log(posts);
   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);
   return (
    <section className="personalities">
        <Navbar/>
        <div className="personalities-header">
      <div className="col-md-4 header-feature-text d-flex align-items-center">
      <div className="position-relative">
        <h1>Pledge</h1>
        <h1 className="stroke">Pledge</h1>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-md-4"><h3> 11868 Pledges from 147 countries </h3></div>
                <div className="col-md-8"><select className="form-select">
                                        <CountrySelect/>
                                        </select>
                                        </div>
          </div>
      
      </div>
      </div>
      </div>
      <div className="container">
        <div className="row">{currentPosts.map((person)=> {
          return  <PersonSmall
                    known_for={person.known_for}
                    full_name={person.full_name}
                    key={person}
                    image={leymah}
                  />
        })}</div>
      </div>
      <div className="container">
          <div className="row">
      </div>
      </div>
    </section>
  );
};