import { useEffect, useState } from "react";
import Loader from "./Loader";
import styles from "./Chart.module.css";
import { Bar } from "react-chartjs-2";



const Chart = (props) => {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);
  const apikey = "d476e9f2148948a:hl66xsc1fpl48t8";
  const { country, indicator, url, delay, nation, name } =
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
