import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((finalRes) => {
        setData(finalRes);
        console.log(finalRes);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { data, error };
};

export default useFetch;
