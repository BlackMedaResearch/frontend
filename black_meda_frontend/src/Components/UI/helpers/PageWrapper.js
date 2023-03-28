import styles from "./PageStyle.module.css";

const PageWrapper = (props) => {
  return (
    <div className={styles.PageWrapper}>
      <div className={styles.Page}>{props.children}</div>
    </div>
  );
};
export default PageWrapper;
