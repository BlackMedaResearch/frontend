import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../../store";
import styles from "./styles/Suggestions.module.css";

const Suggestions = (props) => {
  const dispatch = useDispatch();
  const dateString = useSelector((state) => state.search.date);
  const maxPage = useSelector((state) => state.search.maxPage);
  let pageInt = useSelector((state) => state.search.page);
  pageInt = maxPage >= pageInt + 1 ? pageInt + 1 : pageInt;

  const onClickHandler = (item) => {
    dispatch(
      searchActions.updateOBJ({
        author: item.author,
        content: item.content,
        description: item.description,
        publishedAt: item.publishedAt,
        source: item.source,
        title: item.title,
        url: item.url,
        urlToImage: item.urlToImage,
      })
    );
  };

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
      console.log(data + "Here suggestiotn");
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
          <div onClick={() => onClickHandler(item)}>
            <img
              src={item.urlToImage}
              alt="alternative artikel"
              className={styles["img"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
