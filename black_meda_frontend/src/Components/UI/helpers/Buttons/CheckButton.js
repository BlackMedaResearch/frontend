import styles from "./styles/CheckButton.module.css"


const CheckButton = (props) => {
  return (
    <div className={styles["circle"]} onClick={props.onClose}>
      <span className={`${styles.box} ${styles.red}`}></span>
    </div>
  );
};
export default CheckButton;
