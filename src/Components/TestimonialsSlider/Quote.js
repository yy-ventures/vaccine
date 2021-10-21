import React from 'react'
import './Quote.scss';

export default function Quote({name, quote, designation}) {
    console.log(name, quote, designation);
    return (
        <div id="quote_container">
            <p id="testimonial">"{quote}"</p>
           <div id="lower_text">
           <p id="name"> {name} </p>
           <p id ="designation"> {designation}</p>
           </div>
        </div>
    )
}
