import styles from "./Searchbar.module.css";
import { useRef } from "react";
import { searchActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";

const Searchbar = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search.searchquery);
  const inputRef = useRef();
  const keyDownHandler = (e) => {
    if (e.key === "Enter" || e.code === "Enter") {
      dispatch(searchActions.updatesearchquery(inputRef.current.value));
    }
    return;
  };

  return (
    <div className={styles["searchbar-wrapper"]}>
      <div className={styles["search-icon-wrapper"]}>
        <span className={styles["search-icon searchbar-icon"]}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </span>
      </div>

      <input
        type="text"
        className={styles["searchbar-input"]}
        maxlength="2048"
        name="q"
        autocapitalize="off"
        autocomplete="off"
        title="Search"
        role="combobox"
        placeholder="Search for buzzwords"
        onKeyDown={keyDownHandler}
        ref={inputRef}
      />
    </div>
  );
};

export default Searchbar;
