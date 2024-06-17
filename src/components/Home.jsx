import "./Home.css";
import SelectedWorks from "./SelectedWorks";
import About from "./About";
import websiteTitle from "../assets/images/tia-title.png";
// import websiteTitleVideo from "../assets/video/Tia-title-video.webm";
import Nav from "./Nav";

const Home = () => {
  return (
    <main className="home">
      <Nav />
      <div className="scroll-snap landing-page">
        <div className="home-page" id="home">
          <img src={websiteTitle} className="home-title" />
          {/* <video src={websiteTitleVideo} autoPlay loop /> */}
        </div>
        <h3 className="sub-heading-text">Composer, Musician and Artist</h3>
      </div>
      <SelectedWorks />
      <About />
    </main>
  );
};

export default Home;
