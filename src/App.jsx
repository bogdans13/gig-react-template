import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Gig from "./components/Gig.jsx"
import tameImpala from "./assets/tame_impala_band.jpg"
import omarApollo from "./assets/omar_apollo.webp"

// import "./Gig.css"
// leaving out for the moment, CSS is work in progress

// Code at React: Passing data(props) to Components - Challenge 
// part in the learning module (changing name/job/dob to use props)

function App() {
  return (
    <div>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Gig
        name="Tame Impala"
        logoSrc={tameImpala}
        description="lorem ipsum testing sample concert"
        timeanddate="Thu 21 March 2024 19:00"
        location="O2 Greenwhich, London"
      />
      {/* duplicating the Gig component for a second gig */}
      <Gig
        name="Omar Apollo"
        logoSrc={omarApollo}
        description="lorem ipsum testing sample concert"
        timeanddate="Thu 21 March 2024 19:00"
        location="The RoundHouse, London"
      />

    </div>
  );
}


// Code at React: React Components - Exercise part in
// the learning module (first time constructing Profile)

// function App() {
//   return (
//     <div>
//       <Hello name="World" />
//       <img className="logo" src={makersLogo}></img>
//       <Gig/>
//     </div>
//     );
// }

export default App;
