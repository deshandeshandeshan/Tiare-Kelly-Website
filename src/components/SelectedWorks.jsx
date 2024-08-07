import "./SelectedWorks.css";
// import SelectedWorksCarousel from "./SelectedWorksCarousel";
import sanityClient from "../client";
import { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            role,
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
      <ul className="slider">
        {selectedWorks &&
          selectedWorks.map((selectedWork, index) => {
            return (
              <li
                key={`selectedWork_${index}`}
                className="selected-works-list-item open slide"
                style={{
                  transform: `translateX(-${currentProject * 100}%)`,
                }}
              >
                <div className="project-overlay-text">
                  <p className="selected-work-heading overlay-text-colour">
                    {selectedWork.title} : {selectedWork.type}
                  </p>

                  <p className="selected-work-type overlay-text-colour">
                    {selectedWork.role}
                  </p>
                </div>

                <Link
                  to={`/${selectedWork.title}`}
                  className="project-link project-padding icon-center"
                >
                  <img
                    src={selectedWork.image.asset.url}
                    className={`selected-work-image slide-${index}`}
                  />
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default SelectedWorks;
