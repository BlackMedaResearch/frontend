import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import News from "./News";
import styles from "./styles/ResultsSearch.module.css"

const ResultsSearch = () => {
  const dateString = useSelector((state) => state.search.date);
  const pageInt = useSelector((state) => state.search.page);
  const searchquery = encodeURIComponent(
    useSelector((state) => state.search.searchquery)
  );
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchNewsApi = async () => {
      const url =
        "https://newsapi.org/v2/everything?" +
        `q=${searchquery}&` +
        `from=${dateString}&` +
        "sortBy=popularity&" +
        `page=${pageInt.toString()}&` +
        "apiKey=ccbd98fc4cf94220849d3a584343667f";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setResults(data.articles);
    };
    fetchNewsApi();
  }, [dateString, searchquery]);

  return (
    <div className={styles["search-results-wrapper"]}>
      {results.map((item) => (
        <News imgsrc={item.urlToImage} heading={item.title} />
      ))}
    </div>
  );
};
export default ResultsSearch;
