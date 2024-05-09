import "./Home.css";
import SelectedWorks from "./SelectedWorks";
import About from "./About";
import websiteTitle from "../assets/images/Group 48.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-page" id="home">
        <img src={websiteTitle} className="home-title" />
      </div>
      <h3 className="sub-heading-text">Composer, Musician and Artist</h3>
      <div className="scroll-snap-container">
        <SelectedWorks className="scroll-snap" />
      </div>
      <About />
    </div>
  );
};

export default Home;
