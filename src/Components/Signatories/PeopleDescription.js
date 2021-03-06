import React from 'react';

import './PeopleDescription.scss';
export default function PeopleDescription(props) {
    const {first_name, last_name, known_for, image} = props;
    return (
        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 people-description mt-4">
            <div className="row">
              <div className="col-md-6 img-fluid p-0">
                <img
                  src={image}
                  alt={first_name + last_name}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-4 p-0 d-flex flex-column justify-content-end people-description-data">
              <div className="col-lg-6 col-md-6 col-sm-4 p-0 d-flex flex-column justify-content-end">
                <p id="personality-name">{first_name} {last_name}</p>
                <p id="personality-status">{known_for}</p>
              </div>
            </div>
          </div>
        </div>
    )
}
