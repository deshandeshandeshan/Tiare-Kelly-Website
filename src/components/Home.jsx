import "./Home.css";
import SelectedWorks from "./SelectedWork";
import About from "./About";
import Extras from "./Extras";

const Home = () => {
  return (
    <div className="home">
      <div className="home-page home-main-grid" id="home">
        <h1 className="home-heading">Tiare Kelly</h1>
        <div className="contact-details">
          <ul className="contact-details-list">
            <li className="contact-details-list-item">Contact</li>
            <li className="contact-details-list-item">+64 000 000 0000</li>
            <li className="contact-details-list-item">tiarekelly@gmail.com</li>
          </ul>
        </div>
      </div>
      <SelectedWorks />
      <About />
      <Extras />
    </div>
  );
};

export default Home;
