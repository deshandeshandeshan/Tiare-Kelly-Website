import { useState, useEffect } from "react";
import sanityClient from "../client";
// import ReactPlayer from "react-player";

const SelectedWorksData = () => {
  const [selectedWorks, setSelectedWorks] = useState(null);

  useEffect(() => {
    const fetchData = () => {
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
    };

    fetchData();
    console.log(selectedWorks);
  }, []);

  return (
    <ul>
      {selectedWorks &&
        selectedWorks.map((selectedWork) => (
          <li key={selectedWork.id} className="selected-works-list-item open">
            <div className="selected-work-border-top" />
            <p className="selected-work-heading">{selectedWork.title}</p>
            <p className="selected-work-type">{selectedWork.type}</p>
            <img
              src={selectedWork.image.asset.url}
              className="selected-work-date"
            />
          </li>
        ))}
      <div className="selected-work-border-top" />
    </ul>
  );
};

export default SelectedWorksData;
