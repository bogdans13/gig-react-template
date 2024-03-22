import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Gig from "./components/Gig.jsx"
// import "./Gig.css"
// leaving out for the moment, CSS is work in progress


function App() {
  return (
    <div>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Gig/>
    </div>
    );
}

export default App;
