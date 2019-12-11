export const normalizeData = data => {
  let sunrise = data.city.sunrise;
  let sunset = data.city.sunset;
  let city = data.city.name;
  let country = data.city.country;
  let toBeAdded = `${city}, ${country}`;
  let date = data.list.map(d => d.dt_txt);
  let humidity = data.list.map(h => h.main.humidity);
  let temp = data.list.map(t => t.main.temp);
  let tempCelsius = temp.map(t => Math.floor(t - 273.15));
  let tempFahrenheit = temp.map(t => Math.floor((t - 273.15) * (9 / 5) + 32));
  let pressure = data.list.map(t => t.main.pressure);

  const returnData = {
    city,
    country,
    toBeAdded,
    date,
    humidity,
    tempCelsius,
    tempFahrenheit,
    pressure,
    sunrise,
    sunset
  };
  return returnData;
};
