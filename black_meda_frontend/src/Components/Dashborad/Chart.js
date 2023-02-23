import { useEffect, useState } from "react";
import styles from "./Chart.module.css";

const Chart = (props) => {
  const [values, setValues] = useState([]);
  const { country, indicator, url, apikey, delay, nation } = props.indicator;

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
    }, delay);

    try {
      data();
    } catch (error) {}
  }, [URL, delay]);

  return (
    <div className={styles["wrapper-chart"]}>
      <p>chart {nation}</p>
      {values}
    </div>
  );
};
export default Chart;
