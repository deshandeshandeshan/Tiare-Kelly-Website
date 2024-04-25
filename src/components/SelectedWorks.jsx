import "./SelectedWorks.css";
import { useState, useEffect } from "react";
import sanityClient from "../client";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const SelectedWorks = () => {
  const [selectedWorks, setSelectedWorks] = useState(null);
  const [currentProject, setCurrentProject] = useState(0);

  const prev = () => {
    setCurrentProject((current) =>
      current === 0 ? selectedWorks.length - 1 : current - 1
    );
  };

  const next = () => {
    setCurrentProject((current) =>
      current === selectedWorks.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "selectedWorks"]{
          title,
          type,
          image {
            asset -> {
              url
            }
          }
        }`
      )
      .then((data) => setSelectedWorks(data))
      .catch(console.error);
  }, []);

  return (
    <section className="selected-works-page slider-wrapper" id="selected-works">
      <ul className="slider">
        {selectedWorks &&
          selectedWorks.map((selectedWork, i) => (
            <li
              key={`selectedWork_${i}`}
              className="selected-works-list-item open slide"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              <div className="project-overlay-text">
                <p className="selected-work-heading overlay-text-colour">
                  {selectedWork.title}
                </p>

                <p className="selected-work-type overlay-text-colour">
                  {selectedWork.type}
                </p>
              </div>
              <img
                src={selectedWork.image.asset.url}
                className={`selected-work-image slide-${i}`}
              />
              <FaAngleLeft
                size="42"
                onClick={prev}
                className="image-slider-left-arrow"
              />
              <FaAngleRight
                size="42"
                onClick={next}
                className="image-slider-right-arrow"
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default SelectedWorks;
