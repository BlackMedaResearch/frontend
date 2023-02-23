import { useState } from "react";
import Chart from "../Components/Dashborad/Chart";
import Dropdown from "../Components/Dashborad/Dropdown";

const Macros = () => {
  const [country, setCountry] = useState("Sweden");
  const apikey = "d476e9f2148948a:hl66xsc1fpl48t8";

  const getCountry = (country) => {
    setCountry(country);
  };

  const fetchdatato = [
    {
      country: `/country/${country}`,
      indicator: "/indicator/Inflation%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
      name: "Inflation",
      delay: 0,
      nation : country,
      test: "https://api.tradingeconomics.com/historical/country/Mexico/indicator/Inflation%20Rate?c=d476e9f2148948a:hl66xsc1fpl48t8"
    },
    {
      country: `/country/${country}`,
      indicator: "/indicator/GDP%20Growth%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
      name: "GDP Growth",
      delay: 2000,
      nation : country
    },
    {
      country: `/country/${country}`,
      indicator: "/indicator/Unemployment%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
      name: "Arbeitslosenrate",
      delay: 4000,
      nation : country
    },
    {
      country: `/country/${country}`,
      indicator: "/indicator/Interest%20Rate?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
      name: "Zinsrate",
      delay: 6000,
      nation : country
    },
    {
      country: `/country/${country}`,
      indicator: "/indicator/Inflation%20Rate%20MoM?c=",
      url: "https://api.tradingeconomics.com/historical",
      apikey: apikey,
      name: "Infaltion MoM",
      delay: 8000,
      nation : country
    },
  ];

  return (
    <div>
      <Dropdown getCountry={getCountry} />
      {fetchdatato.map((chart) => (
        <Chart indicator={chart} key={chart.name} />
      ))}
    </div>
  );
};

export default Macros;
