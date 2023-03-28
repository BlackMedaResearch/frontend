import { useState, useEffect } from "react";
import styles from "./Banner.module.css"

const Banner = () => {
  const [ForntNewsData, setFrontNews] = useState([]);
  useEffect(() => {
    const fetchNewsApi = async () => {
      const url =
        "https://newsapi.org/v2/everything?" +
        "q=Apple&" +
        "from=2023-02-28&" +
        "sortBy=popularity&" +
        "apiKey=ccbd98fc4cf94220849d3a584343667f";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.articles);
      setFrontNews(data.articles.slice(0, 10));
      console.log(data);
    };
    fetchNewsApi();
  }, []);

  return (
    <div className={styles["wrapper-banner"]}>
      {ForntNewsData.map((item) => (
        <div>
          <img src={item.urlToImage} />
        </div>
      ))}
    </div>
  );
};

export default Banner;