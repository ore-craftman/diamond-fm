import { useState, useEffect } from "react";
const axios = require("axios");
const Weather = () => {
  const [data, setData] = useState(null);
  const [temp, setTemp] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Kwara,ilorin&appid=b190a0605344cc4f3af08d0dd473dd25&units=metric"
      )
      .then((response) => {
        setData(response.data.weather[0]);
        setTemp(response.data.main.temp);
      });
  }, []);
  return (
    <div className="my-4">
      <h4>WEATHER REPORT</h4>
      <section className="bg-info my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3">
        <div>
          <i className="bi bi-brightness-alt-high-fill h1 fw-bolder"></i>

          <h1>{temp ? temp : "25"} &#176;C</h1>
        </div>

        <div>
          <p className="mb-0">Ilorin</p>

          <h4 className="fw-bolder">{data ? data.main : "Clouds"}</h4>
          <p className="mb-0">{data ? data.description : "scattered clouds"}</p>
        </div>
      </section>
    </div>
  );
};

export default Weather;
