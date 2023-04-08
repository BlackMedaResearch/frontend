import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles/Suggestions.module.css";

const Suggestions = (props) => {
  const dateString = useSelector((state) => state.search.date);
  const maxPage = useSelector((state) => state.search.maxPage);
  let pageInt = useSelector((state) => state.search.page);
  pageInt = maxPage >= pageInt + 1 ? pageInt + 1 : pageInt;

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
      setResults(data.articles.slice(0, 3));
    };
    fetchNewsApi();
  }, [dateString, searchquery]);

  return (
    <div className={styles["wrapper-suggestions"]}>
      <div>
        <h3 className={styles["header-suggestions"]}>Ähnliche Artikel</h3>
      </div>
      <div className={styles["holder-suggestions"]}>
        {results.map((item) => (
          <div>
            <img
              src={item.urlToImage}
              alt="alternative artikel"
              className={styles["img"]}
            />
            <p>{item.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
