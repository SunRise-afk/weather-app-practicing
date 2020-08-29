import React from "react";
import { Home } from "./Home";
import Axios from "axios";
import { useState } from "react";

export const HomeContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityChoiceMode, setcityChoiceMode] = useState(true);
  const onSubmitCityHandler = (val) => {
    Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${val.city}&appid=7fe822e5a7ecfc25f01f2589ff6bd023`
    ).then(
      (response) => {
        console.log(response.status);
        setWeatherData(response.data.weather[0].main);
      },
      (error) => {
        setWeatherData(error.response.statusText);
        console.log(error.response);
      }
    );
  };

  return (
    <Home
      data={weatherData}
      onSubmitCityHandler={onSubmitCityHandler}
      cityChoiceMode={cityChoiceMode}
      setcityChoiceMode={setcityChoiceMode}
      setWeatherData={setWeatherData}
    ></Home>
  );
};
