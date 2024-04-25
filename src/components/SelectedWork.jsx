import { useEffect, useState } from "react";
import { useParams } from "react-router";
import sanityClient from "../client";

const SelectedWork = () => {
  const [selectedWorks, setSelectedWorks] = useState(null);
  const [selectedWork, setSelectedWork] = useState([]);

  const { id } = useParams();

  const filterSelectedWorks = (id) => {
    const filteredSelectedWork = selectedWorks.find(
      (selectedWork) => selectedWork.title === id
    );
    setSelectedWork(filteredSelectedWork);
  };

  useEffect(() => {
    filterSelectedWorks(id);

    const fetchData = async () => {
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

    fetchData();
  }, [id]);

  console.log(selectedWorks);

  return <p>{selectedWork.title}</p>;
};

export default SelectedWork;
