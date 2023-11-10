import { useEffect } from "react";
import axios from "axios";

const Results = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://us-central1-involuted-alpha-404216.cloudfunctions.net/jobbais"
          // "https://jobbais-vfkrofhmwq-lm.a.run.app/",
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p> </p>
    </>
  );
};

export default Results;
