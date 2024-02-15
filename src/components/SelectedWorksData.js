import { useState, useEffect } from "react";
import sanityClient from "../client";

const SelectedWorksData = () => {
  const [selectedWorks, setSelectedWorks] = useState(null);

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
};

export default SelectedWorksData;
