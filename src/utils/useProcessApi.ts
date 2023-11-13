import { useEffect, useState } from "react";
import axios from "axios";

const useProcessApi = (text: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [serverError, setServerError] = useState(null);

  const url = import.meta.env.VITE_PROCESS_API;
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.post(url, { text });
        setData(response.data);
        // console.log(response.data);
      } catch (error: any) {
        setIsLoading(true);
        setServerError(error?.message);
      }
    };

    fetchData();
  }, []);

  return { isLoading, data, serverError };
};

export default useProcessApi;
