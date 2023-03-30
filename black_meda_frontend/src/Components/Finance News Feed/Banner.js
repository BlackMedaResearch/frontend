import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import styles from "./Banner.module.css"

const Banner = () => {
  const [ForntNewsData, setFrontNews] = useState([]);
  useEffect(() => {
    const fetchNewsApi = async () => {
      const url =
        "https://newsapi.org/v2/everything?" +
        "q=Apple&" +
        "from=2023-03-22&" +
        "sortBy=popularity&" +
        "apiKey=ccbd98fc4cf94220849d3a584343667f";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.articles);
      setFrontNews(data.articles.slice(3,4));
      console.log(data);
    };
    fetchNewsApi();
  }, []);

  return (
    <div className={styles["wrapper-banner"]}>
      {ForntNewsData.map((item) => (
        <div className={styles["news-wrapper"]}>
          <img src={item.urlToImage} className={styles.img}/>
          <div className={styles.overlay}></div> 
        </div>
      ))}
      <Searchbar/>
    </div>
  );
};

export default Banner;
