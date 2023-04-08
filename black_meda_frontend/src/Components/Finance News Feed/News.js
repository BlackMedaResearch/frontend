import styles from "./styles/News.module.css";
import LinkButton from "../UI/helpers/Buttons/LinkButton";
import { useDispatch } from "react-redux";
import { searchActions, modalActions } from "../../store";

const News = (props) => {
  const dispatch = useDispatch();

  const buttonClickHandler = () => {
    dispatch(
      searchActions.updateOBJ({
        author: props.author,
        content: props.content,
        description: props.description,
        publishedAt: props.publishedAt,
        source: props.source,
        title: props.title,
        url: props.url,
        urlToImage: props.urlToImage,
      })
    );
    dispatch(modalActions.updateShowModal(true));
  };
  return (
    <div className={styles["wrapper-news"]} onClick={buttonClickHandler}>
      <img
        src={props.urlToImage}
        className={styles["img-wrapper"]}
        alt="newspicture"
      />
      <div className={styles["info-wrapper"]}>
        <h2 className={styles["heading"]}>{props.title}</h2>
      </div>
      <div className={styles["wrapper-show-more"]}>
        <LinkButton/>
      </div>
    </div>
  );
};
export default News;
