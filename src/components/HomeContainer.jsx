import React from "react";
import { Home } from "./Home";
import Axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

export const HomeContainer = () => {
  const [weatherData, setWeatherData] = useState({ errorStatus: false });
  const [cityChoiceMode, setcityChoiceMode] = useState(true);
  const [newsStorage, setNewsStorage] = useState([
    {
      description: "",
      title: "",
      url: "#",
      urlToImage: "https://pokrovsk.news/i/news.svg",
    },
    {
      description: "",
      title: "",
      url: "#",
      urlToImage: "https://pokrovsk.news/i/news.svg",
    },
    {
      description: "",
      title: "",
      url: "#",
      urlToImage: "https://pokrovsk.news/i/news.svg",
    },
  ]);
  const onSubmitCityHandler = (val) => {
    Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${val.city}&appid=7fe822e5a7ecfc25f01f2589ff6bd023`
    ).then(
      (response) => {
        setWeatherData({
          temp: response.data.main.temp - 273,
          feels_like: response.data.main.feels_like - 273,
          humidity: response.data.main.humidity,
          pressure: response.data.main.pressure,
          city_name: response.data.name,
          weather_description: response.data.weather[0].description,
          weather_main: response.data.weather[0].main,
          weather_icon: response.data.weather[0].icon,
          errorStatus: false,
          errorText: "",
        });
      },
      (error) => {
        setWeatherData({
          errorText: error.response.statusText,
          errorStatus: true,
        });
      }
    );
  };

  const settingNews = () => {
    Axios.get(
      "http://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=3&apiKey=653139cd7ca649a488f34fdac05bd3a5"
    ).then((response) => {
      setNewsStorage(response.data.articles);
      setcityChoiceMode(false);
    });
  };
  const gettingGeoData = () => {
    Axios.get("http://api.sypexgeo.net").then((response) => {
      onSubmitCityHandler({ city: response.data.city.name_en });

      console.log(response);
    });
  };

  useEffect(() => {
    settingNews();
    gettingGeoData();
  }, []);

  return (
    <Container>
      <Home
        data={weatherData}
        onSubmitCityHandler={onSubmitCityHandler}
        cityChoiceMode={cityChoiceMode}
        setcityChoiceMode={setcityChoiceMode}
        setWeatherData={setWeatherData}
        newsStorage={newsStorage}
      ></Home>
    </Container>
  );
};
