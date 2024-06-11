import { Link } from "react-router-dom";
import "./SelectedWork.css";
import sanityClient from "../client";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const SelectedWork = () => {
  const [selectedWork, setSelectedWork] = useState([]);

  const { id } = useParams();

  const fetch = async (id) => {
    const response = await sanityClient.fetch(
      `*[_type == "selectedWorks"]{
            title,
            type,
            description,
            video,
            role,
            image {
              asset -> {
                url
              }
            }
          }`
    );

    const filteredProject = response.find((work) => work.title === id);
    const result = setSelectedWork(filteredProject);
    return result;
  };

  useEffect(() => {
    fetch(id);
  }, [id]);

  console.log(selectedWork);
  console.log(id);

  return (
    <main className="selected-work-page">
      <div className="selected-work-grid">
        <h2 className="selected-work-title">
          {selectedWork.title}: {selectedWork.type}
        </h2>
        <h2 className="selected-work-role selected-work-padding-bottom">
          {selectedWork.role}
        </h2>
        <Link to="/" className="selected-work-link">
          <p className="selected-work-link-to-home selected-work-padding-bottom">
            Return
          </p>
        </Link>
      </div>
      <div className="video-container">
        <iframe
          className="selected-work-video"
          src={selectedWork.video}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="selected-work-description selected-work-padding-top">
        {selectedWork.description}
      </p>
    </main>
  );
};

export default SelectedWork;
