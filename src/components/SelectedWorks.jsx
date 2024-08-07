import "./SelectedWorks.css";
// import SelectedWorksCarousel from "./SelectedWorksCarousel";
import sanityClient from "../client";
import { useState, useEffect, useRef } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";

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

  // Scroll animation

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [2, 4]);

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
    <section
      ref={container}
      className="selected-works-page slider-wrapper"
      id="selected-works"
    >
      <div className="sticky">
        <div className="el">
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
          <motion.div
            className="selected-image-container"
            style={{ scale: scale4 }}
          >
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
                      {/* <div className="project-overlay-text">
                        <p className="selected-work-heading overlay-text-colour">
                          {selectedWork.title} : {selectedWork.type}
                        </p>

                        <p className="selected-work-type overlay-text-colour">
                          {selectedWork.role}
                        </p>
                      </div> */}

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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
