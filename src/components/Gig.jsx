import React from "react";

// "../" because the .jpg is one level up from/outside of 
// the src/components/ folder; in src/assets folder instead

// Code at React: Passing data(props) to Components - Challenge 
// part in the learning module (listing elements as props in Gig)

const Gig = (props) => {
    return (
        <div id="band">
        <h3 id="name">{props.name}</h3>
        <img className="logo" src={props.logoSrc}/>
        <p id="description">{props.description}</p>
        <p id="timeanddate">{props.timeanddate}</p>
        <p id="location">{props.location}</p>
        </div>
    )
};


// Code at React: React Components - Challenge part in
// the learning module (first time constructing Gig)

// const Gig = () => {
//     return (
//         <div id="band">
//         <h3 id="name">Tame Impala</h3>
//         <img className="logo" src={tameImpala}></img>
//         <p id="description">lorem ipsum testing sample concert</p>
//         <p id="timeanddate">Thu 13 April 2024 20:00</p>
//         <p id="location">O2 Greenwhich, London</p>
//         </div>
//     )
// };


export default Gig;
