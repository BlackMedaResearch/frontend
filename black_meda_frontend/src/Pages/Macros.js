import { useEffect, useState } from "react";
import Chart from "../Components/Dashborad/Chart";
import Dropdown from "../Components/Dashborad/Dropdown";

const Macros = () => {
  const [indicatordata, setIndicatorData] = useState([]);

  const apikey = "";

  const getCountry = (country) => {
    return country;
  };

  const fetchdatato = [
    {
      country: `/country/${getCountry}`,
      indicator: "/indicator/Inflation%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
      name: "Inflation",
    },
    {
      country: `/country/${getCountry}`,
      indicator: "/indicator/GDP%20Growth%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
      name: "GDP Growth",
    },
    {
      country: `/country/${getCountry}`,
      indicator: "/Unemployment%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
      name: "Arbeitslosenrate",
    },
    {
      country: `/country/${getCountry}`,
      indicator: "/indicator/Interest%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
      name: "Zinsrate",
    },
    {
      country: `/country/${getCountry}`,
      indicator: "/indicator/Inflation%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
    },
  ];

  useEffect(() => {}, []);

  return (
    <div>
      <Dropdown />
      {fetchdatato.map((chart) => (
        <Chart indicator={chart} />
      ))}
    </div>
  );
};

export default Macros;
