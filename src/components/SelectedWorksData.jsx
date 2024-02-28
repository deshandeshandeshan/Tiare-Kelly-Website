import { useState, useEffect } from "react";
import sanityClient from "../client";
// import ReactPlayer from "react-player";

const SelectedWorksData = () => {
  const [selectedWorks, setSelectedWorks] = useState(null);
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    const fetchData = () => {
      sanityClient
        .fetch(
          `*[_type == "selectedWorks"]{
        title,
        url,
        type,
        description,
        date
      }`
        )
        .then((data) => setSelectedWorks(data))
        .catch(console.error);
    };

    fetchData();
  }, []);

  console.log(selectedWorks);

  return (
    <ul>
      {selectedWorks &&
        selectedWorks.map((selectedWork, i) => (
          <li
            key={selectedWork.id}
            className="selected-works-list-item"
            onClick={() => toggle(i)}
          >
            <div className="selected-work-border-top" />
            <h3 className="selected-work-heading">{selectedWork.title}</h3>
            <div className="video-wrapper">
              <iframe
                className={
                  selected === i
                    ? `selected-works-video open`
                    : `selected-works-video closed`
                }
                src={
                  selected === i ? `${selectedWork.url}` : `${selectedWork.url}`
                }
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
            <p className="selected-work-type">{selectedWork.type}</p>
            <p
              className={
                selected === i
                  ? `selected-work-description show`
                  : `selected-work-description hidden`
              }
            >
              {selectedWork.description}
            </p>
            <p className="selected-work-date">{selectedWork.date}</p>
          </li>
        ))}
      <div className="selected-work-border-top" />
    </ul>
  );
};

export default SelectedWorksData;
