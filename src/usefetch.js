import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [myData, setMyData] = useState([
    {
      title: "My new website",
      body: "Welcome to my new website. I hope you enjoy your stay!",
      author: "Bella",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "Join us this Saturday for a welcome party at my house!",
      author: "TioluwaLope",
      id: 2,
    },
    {
      title: "The best burger in town",
      body: "Come try the best burger in town at Joe's Burgers!",
      author: "TioluwaLope",
      id: 3,
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Data not found");
          }
          return res.json();
        })
        .then((actualData) => {
          console.log(actualData);
          setMyData(actualData);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return { myData, isLoading, error };
};

export default useFetch;
