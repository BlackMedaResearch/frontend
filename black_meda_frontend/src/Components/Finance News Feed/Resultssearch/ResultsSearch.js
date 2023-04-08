import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../News";
import styles from "./styles/ResultsSearch.module.css";
import { searchActions } from "../../../store";
import { maxPage } from "./utlis";

const ResultsSearch = () => {
  const dispatch = useDispatch();
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
      dispatch(searchActions.getTotalresults(data.totalResults));
      dispatch(searchActions.setMaxPage(maxPage(data.totalResults)));
    };
    fetchNewsApi();
  }, [dateString, searchquery, pageInt]);

  return (
    <div className={styles["search-results-wrapper"]}>
      {results.map((item) => (
        <News
          urlToImage={item.urlToImage}
          title={item.title}
          url={item.url}
          source={item.source}
          publishedAt={item.publishedAt}
          description={item.description}
          content={item.content}
          author={item.author}
        />
      ))}
    </div>
  );
};
export default ResultsSearch;
