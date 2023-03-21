const factoryApiFetchFunction = (indicatorname, delay, abbreviation) => {
  return {
    country: `/country/Sweden`,
    indicator: `/indicator/${abbreviation}`,
    url: "https://api.tradingeconomics.com/historical",
    name: indicatorname,
    delay: delay,
    nation: undefined,
  };
};

export const fetchArray = [
  factoryApiFetchFunction("Inflation", 0, "Inflation%20Rate?c="),
  factoryApiFetchFunction("GDP Grwoth", 800, "GDP%20Growth%20Rate?c="),
  factoryApiFetchFunction("Arbeitslosenrate", 1600, "Unemployment%20Rate?c="),
  factoryApiFetchFunction("Zinsrate", 2400, "Interest%20Rate?c="),
  factoryApiFetchFunction("Infaltion MoM", 3200, "Inflation%20Rate%20MoM?c="),
];
