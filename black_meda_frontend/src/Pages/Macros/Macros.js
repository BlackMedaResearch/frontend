import { useState } from "react";
import Chart from "../../Components/Dashborad/Chart";
import Dropdown from "../../Components/Dashborad/Dropdown";
import styles from "./Macros.module.css";
import Header from "../../Components/UI/header/header";
import ChartExample from "../../Components/Dashborad/ChartExample"


const Macros = () => {
  const [country, setCountry] = useState("Sweden");

  const getCountry = (country) => {
    setCountry(country);
  };

  const fetchdatato = [
    {
      country: `/country/${country}`,
      indicator: "/indicator/Inflation%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      name: "Inflation",
      delay: 0,
      nation: country,
      test: "https://api.tradingeconomics.com/historical/country/Mexico/indicator/Inflation%20Rate?c=d476e9f2148948a:hl66xsc1fpl48t8",
    },
    {
      country: `/country/${country}`,
      indicator: "/indicator/GDP%20Growth%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      name: "GDP Growth",
      delay: 800,
      nation: country,
    },
    {
      country: `/country/${country}`,
      indicator: "/indicator/Unemployment%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      name: "Arbeitslosenrate",
      delay: 1600,
      nation: country,
    },
    {
      country: `/country/${country}`,
      indicator: "/indicator/Interest%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      name: "Zinsrate",
      delay: 2400,
      nation: country,
    },
    {
      country: `/country/${country}`,
      indicator: "/indicator/Inflation%20Rate%20MoM?c=",
      url: "https://api.tradingeconomics.com/historical",
      name: "Infaltion MoM",
      delay: 3200,
      nation: country,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />
      <div>
        <video />
      </div>
      <ChartExample/>

      <Dropdown getCountry={getCountry} />

      <div className={styles["wrapper-graphs"]}>
        {fetchdatato.map((chart) => (
          <Chart indicator={chart} key={chart.name} />
        ))}
      </div>
    </div>
  );
};

export default Macros;
