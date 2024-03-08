import "./SelectedWork.css";
// import ReactPlayer from "react-player";
import SelectedWorksData from "./SelectedWorksData";

const SelectedWork = () => {
  return (
    <div className="selected-works-page" id="selected-works">
      <div className="selected-works-intro">
        <h2 className="selected-works-intro-text">
          Tiare Kelly is a Composer, Musician & Artist based in Tamaki Makaurau
          (Auckland), these are her selected works.
        </h2>
      </div>
      <div className="selected-works">
        <ul className="selected-works-headings-list">
          <li className="headings-list-item headings-list-item-a">
            <h3>TITLE</h3>
          </li>
          <li className="headings-list-item headings-list-item-b">
            <h3>TYPE</h3>
          </li>
          <li className="headings-list-item headings-list-item-c">
            <h3>DATE</h3>
          </li>
        </ul>
        <SelectedWorksData />
      </div>
    </div>
  );
};

export default SelectedWork;
