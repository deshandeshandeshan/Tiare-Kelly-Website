import "./Home.css";
import SelectedWorks from "./SelectedWorks";
import About from "./About";
import websiteTitle from "../assets/images/tk.png";
import Nav from "./Nav";

const Home = () => {
  return (
    <main className="home">
      <Nav />
      <div className=" landing-page" id="home">
        <div className="home-page home-title-content">
          <img src={websiteTitle} className="home-title" />
          <h3 className="sub-heading-text">Composer, Musician and Artist</h3>
        </div>
      </div>
      <SelectedWorks />
      <About />
    </main>
  );
};

export default Home;
