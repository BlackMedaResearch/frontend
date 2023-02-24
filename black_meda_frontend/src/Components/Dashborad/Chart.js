import { useEffect, useState } from "react";
import Loader from "./Loader";
import Card from "../UI/helpers/Card";
import styles from "./Chart.module.css";

const Chart = (props) => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);
  const { country, indicator, url, apikey, delay, nation, name } =
    props.indicator;

  const URL = url + country + indicator + apikey;

  useEffect(() => {
    const data = setTimeout(async () => {
      const response = await fetch(URL, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error("Data could not load");
      }

      const data = await response.json();
      console.log(data);
      const values = data.map((data) => data.Value);
      setValues(values);
      setLoading(false);
    }, delay);

    try {
      setLoading(true);
      data();
    } catch (error) {}
  }, [URL, delay]);

  return (
    <div className={styles["wrapper-chart"]}>
      <div className={styles["header-div"]}>
        <h2 className={styles.header}>{name}</h2>
      </div>
      <div className={styles["chart-holder"]}>
        {loading && <Loader />}
        {!loading && values}
      </div>
    </div>
  );
};
export default Chart;
