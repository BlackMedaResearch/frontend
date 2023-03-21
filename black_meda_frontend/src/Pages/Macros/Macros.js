import { useState, useEffect } from "react";
import Chart from "../../Components/Dashborad/Chart";
import Dropdown from "../../Components/Dashborad/Dropdown";
import styles from "./Macros.module.css";
import Header from "../../Components/UI/header/header";
import ChartExample from "../../Components/Dashborad/ChartExample";

import { fetchArray } from "./MacroApiData";

const Macros = () => {
  const [country, setCountry] = useState("Sweden");
  const [chartData, setChartData] = useState(fetchArray);

  const getCountry = (country) => {
    setCountry(country);
  };

  useEffect(() => {
    const updatedArray = chartData.map((obj) => {
      return {
        ...obj,
        country: `/country/${country}`,
        nation: country,
      };
    });
    setChartData(updatedArray);
  }, [country]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div>
        <video />
      </div>
      <ChartExample />

      <Dropdown getCountry={getCountry} />

      <div className={styles["wrapper-graphs"]}>
        {chartData.map((chart) => (
          <Chart indicator={chart} key={chart.name} />
        ))}
      </div>
    </div>
  );
};

export default Macros;
