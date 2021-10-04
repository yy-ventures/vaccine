import React from 'react'

import './Quote.scss';

export default function Quote(props) {
    props= props.info;
    return (
        <div id="quote_container">
           <p id="testimonial">"{props.quote}"</p>
           <div id="lower_text">
           <p id="name"> {props.name} </p>
           <p id ="designation"> {props.designation}</p>
           </div>
        </div>
    )
}
