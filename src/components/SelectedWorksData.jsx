import { useState, useEffect } from "react";
import sanityClient from "../client";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const SelectedWorksData = () => {
  const [selectedWorks, setSelectedWorks] = useState(null);

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

  console.log(selectedWorks);

  return (
    <ul>
      {selectedWorks &&
        selectedWorks.map((selectedWork, i) => (
          <li
            key={`selectedWork_${i}`}
            className="selected-works-list-item open"
          >
            <p className="selected-work-heading">{selectedWork.title}</p>
            <p className="selected-work-type">{selectedWork.type}</p>
            <img
              src={selectedWork.image.asset.url}
              className="selected-work-date"
            />
            <FaAngleLeft className="image-slider-left-arrow" />
            <FaAngleRight className="image-slider-right-arrow" />
          </li>
        ))}
    </ul>
  );
};

export default SelectedWorksData;
