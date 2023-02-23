import { useEffect, useState } from "react";

const Chart = (props) => {
  const { country, indicator, url, apikey } = props.indicator;

  const URL = url + country + indicator + apikey;

  useEffect(() => {
      
  }, []);

  return (
    <div>
      <p>chart {props.name}</p>
    </div>
  );
};
export default Chart;
