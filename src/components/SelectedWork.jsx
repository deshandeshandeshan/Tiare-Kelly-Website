import "./SelectedWork.css";
// import ReactPlayer from "react-player";
import SelectedWorksData from "./SelectedWorksData";

const SelectedWork = () => {
  return (
    <div className="selected-works-page" id="selected-works">
      <div className="selected-works">
        <SelectedWorksData />
      </div>
    </div>
  );
};

export default SelectedWork;
