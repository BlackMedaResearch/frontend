import styles from "./styles/LinkButton.module.css"

const LinkButton = () => {
  return (
    <button>
      <div className={styles["text"]}>
        <span>zum</span>
        <span>Artikel</span>
      </div>
      <div className={styles["clone"]}>
        <span>zum</span>
        <span>Artikel</span>
      </div>
      <svg
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  );
};
export default LinkButton;
