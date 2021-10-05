import React, { useState } from "react";
import Pagination from "./Pagination";
import PeopleDescription from "./PeopleDescription";

import personalities from "./personalities.json";

import "./Personalities.scss";

import leymah from "../../assets/people/leymah.jpg";
import image1 from "../../assets/people/desmond.jpg";
import image2 from "../../assets/people/carlos.jpg";
import Navbar from "../Shared/Navbar/Navbar";


export const Personalities = () => {  
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
        <h1>Personalities</h1>
        <h1 className="stroke">Personalities</h1>
      </div>
      </div>
      <h3> Who Signed the Pledge </h3>
      </div>
      <div className="container">
        <div className="row">{currentPosts.map((person)=> {
          return  <PeopleDescription
                    known_for={person.known_for}
                    full_name={person.full_name}
                    key={person}
                    image={leymah}
                  />
        })}</div>
      </div>
      <div className="container">
          <div className="row">
      <Pagination
      postsPerPage={postsPerPage}
      totalPosts={personalities.length}
      paginate={paginate}
      />
      </div>
      </div>
    </section>
  );
};