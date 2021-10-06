import React from 'react';

import './PeopleDescription.scss';
export default function PeopleDescription(props) {
    const {full_name, known_for, image} = props;
    return (
        <div className="col-md-4 col-sm-4 people-description">
            <div className="row">
              <div className="col-md-6 img-fluid">
                <img
                  src={image}
                  alt={full_name}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <p id="personality-name">{full_name}</p>
                <p id="personality-status">{known_for}</p>
              </div>
            </div>
          </div>
    )
}
