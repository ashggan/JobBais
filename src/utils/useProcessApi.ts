import { useEffect, useState } from "react";
import axios from "axios";

const useProcessApi = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async (url: string) => {
      try {
        const res = await axios.get(url);
        // const data = res;
        console.log("res");
        console.log(res);
        setData(res.data);
        setIsLoading(false);
      } catch (err: any) {
        setServerError(err?.message);
        setIsLoading(false);
      }
    };

    fetchData(url);
  }, [url]);

  return { isLoading, data, serverError };
};

export default useProcessApi;
