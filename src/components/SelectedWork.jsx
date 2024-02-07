import "./SelectedWork.css";
import selectedWorksData from "../assets/data/SelectedWorksData";
import horizon from "../assets/images/horizon.jpg";
import { useState } from "react";

const SelectedWork = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="selected-works-page" id="selected-works">
      <div className="selected-works-intro">
        <p className="selected-works-intro-text">
          Tiare Kelly is a Composer, Musician & Artist based in Tamaki Makaurau
          (Auckland), these are her selected works.
        </p>
      </div>
      <div className="selected-works">
        <ul className="selected-works-headings-list">
          <li className="headings-list-item headings-list-item-a">
            <h3>TITLE</h3>
          </li>
          <li className="headings-list-item headings-list-item-b">
            <h3>SELECTED WORK</h3>
          </li>
          <li className="headings-list-item headings-list-item-c">
            <h3>TYPE</h3>
          </li>
          <li className="headings-list-item headings-list-item-d">
            <h3>DATE</h3>
          </li>
        </ul>
        <ul>
          {selectedWorksData.map((item, i) => (
            <li
              key={item.id}
              className="selected-works-list-item"
              onClick={() => toggle(i)}
            >
              <div className="selected-work-border-top" />
              <p className="selected-work-heading">{item.title}</p>
              <img className="image selected-works-image" src={horizon} />
              <p className="selected-work-type">{item.type}</p>
              <p
                className={
                  selected === i
                    ? `selected-work-description show`
                    : `selected-work-description hidden`
                }
              >
                {item.description}
              </p>
              <p className="selected-work-date">{item.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectedWork;
