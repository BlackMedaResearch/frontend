import styles from "./styles/News.module.css";

const News = (props) => {
  return (
    <div className={styles["wrapper-news"]}>
      <img src={props.imgsrc} className={styles["img-wrapper"]} />
      <div className={styles["info-wrapper"]}>
        <h2 className={styles["heading"]}>{props.heading}</h2>
      </div>
    </div>
  );
};
export default News;
