import React from 'react'

import './Quote.scss';

export default function Quote() {
    return (
        <div id="quote_container">
           <p id="testimonial"> "...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
           <div id="lower_text">
           <p id="name"> Good Name </p>
           <p id ="designation"> Creative Designation</p>
           </div>
        </div>
    )
}
