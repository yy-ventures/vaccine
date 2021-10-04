import React from 'react'

import './Headshot.scss';


export default function Headshot(props) {
    console.log(props);

    return (
        <div id="headshot_container">
         <img src={props.image} alt={props.image.split(5,9)}/>
        </div>
    )
}
