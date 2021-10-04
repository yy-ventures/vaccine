import React from 'react'

import malala from "../../assets/people/carlos.jpg"
import './Headshot.scss';
export default function Headshot() {
    return (
        <div id="headshot_container">
         <img src={malala} alt= "malala"/>
        </div>
    )
}
