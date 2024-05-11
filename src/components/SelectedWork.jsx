import { Link } from "react-router-dom";
import "./SelectedWork.css";

const SelectedWork = () => {
  return (
    <main className="selected-work-page">
      <div className="selected-work-grid">
        <h2 className="selected-work-title">Ballsy: Film</h2>
        <h2 className="selected-work-role selected-work-padding-bottom">
          Composition, Lead guitar
        </h2>
        <Link to="/" className="selected-work-link">
          <p className="selected-work-link-to-home selected-work-padding-bottom">
            Return
          </p>
        </Link>
      </div>
      <div className="video-container">
        <iframe
          className="selected-work-video"
          src="https://player.vimeo.com/video/939135094?h=0f78de8fa9"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p className="selected-work-description selected-work-padding-top">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut.
      </p>
    </main>
  );
};

export default SelectedWork;
