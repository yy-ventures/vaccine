import React, { useState } from "react";
import Pagination from "./Pagination";
import PeopleDescription from "./PeopleDescription";
import personalities from "./personalities.json";
import "./Personalities.scss";
import leymah from "../../assets/people/leymah.jpg";
import Navbar from "../Shared/Navbar/Navbar";
import JoinTheCauseRouter from "../Routes/JoinTheCauseRouter/JoinTheCauseRouter"

export const Personalities = () => {
  document.title = "Signatories | Vaccine Common Goods"
  const [posts, setPosts] = useState(personalities);
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const personalitiesArray = [];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <section className="personalities">
      <Navbar />
      <div className="personality-container">
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
              known_for={person.known_for}
              full_name={person.full_name}
              key={person}
              image={leymah}
            />
          })}</div>
        </div>
        <div className="py-5">
          <div className="row py-5">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={personalities.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
      <JoinTheCauseRouter/>
    </section>
  );
};