import React, { useState } from "react";
import Pagination from "./Pagination";
import PeopleDescription from "./PeopleDescription";

import personalities from "./personalities.json";

import "./Personalities.scss";

import leymah from "../../assets/people/leymah.jpg";
import image1 from "../../assets/people/desmond.jpg";
import image2 from "../../assets/people/carlos.jpg";


export const Personalities = () => {  
    const [posts, setPosts] = useState(personalities);
    //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

    const personalitiesArray = [];

    // const createPersonalities = (person_list) => {
    // for (let i = 0; i < person_list.length - 2; i += 3) {
    //   personalitiesArray.push(
    //     <>
    //       <PeopleDescription
    //         known_for={person_list[i].known_for}
    //         full_name={person_list[i].full_name}
    //         key={person_list[i].id}
    //         image={leymah}
    //       />
    //       <PeopleDescription
    //         known_for={person_list[i + 1].known_for}
    //         full_name={person_list[i + 1].full_name}
    //         key={person_list[i + 1].id}
    //         image={image1}
    //       />
    //       <PeopleDescription
    //         known_for={person_list[i + 2].known_for}
    //         full_name={person_list[i + 2].full_name}
    //         key={person_list[i + 2].id}
    //         image={image2}
    //       />
    //     </>
    //   );
    // }
//     return personalitiesArray;
//   };
   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    console.log(posts);
   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);
   return (
    <section className="personalities">
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
