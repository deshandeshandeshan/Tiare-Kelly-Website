import { useState, useEffect } from "react";
import sanityClient from "../client";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
// import ReactPlayer from "react-player";

const SelectedWorksData = () => {
  const [selectedWorks, setSelectedWorks] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? selectedWorks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === selectedWorks.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    async () => {
      await sanityClient
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
    };
  }, []);

  console.log(selectedWorks);

  return (
    <ul>
      <li
        key={selectedWorks[currentIndex].id}
        className="selected-works-list-item open"
      >
        <p className="selected-work-heading">
          {selectedWorks[currentIndex].title}
        </p>
        <p className="selected-work-type">{selectedWorks[currentIndex].type}</p>
        <img
          src={selectedWorks[currentIndex].image.asset.url}
          className="selected-work-date"
        />
        <FaAngleLeft onClick={goToPrev} className="image-slider-left-arrow" />
        <FaAngleRight onClick={goToNext} className="image-slider-right-arrow" />
      </li>
    </ul>
  );
};

export default SelectedWorksData;
