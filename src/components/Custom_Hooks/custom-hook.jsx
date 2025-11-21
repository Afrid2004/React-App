import React, { useEffect, useState } from 'react';


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loadData, setLoadData] = useState(true);
  const [error, setError] = useState(null);

  const loadingMessage = "Data is loading..."

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Data not fetched.")
        }
        return res.json();
      })
      .then((data) => {
        setLoadData(false);
        setError(null);
        setData(data);
      })
      .catch((error) => {
        setLoadData(false);
        setError(error.message);
      })
  }, [url])

  return { data, loadData, error, loadingMessage }
}

export default useFetch 