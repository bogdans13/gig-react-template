import React from "react";
import tameImpala from "../assets/tame_impala_band.jpg";

// "../" because the .jpg is one level up from/outside of 
// the src/components/ folder; in src/assets folder instead

const Gig = () => {
    return (
        <div id="band">
        <h3 id="name">Tame Impala</h3>
        <img className="logo" src={tameImpala}></img>
        <p id="description">lorem ipsum testing sample concert</p>
        <p id="timeanddate">Thu 21 March 2024 19:00</p>
        <p id="location">O2 Greenwhich, London</p>
        </div>
    )
};

export default Gig;
