import React from "react";
import { WeatherContainer } from "./WeatherContainer";
import { CityInputForm } from "./CityInputForm";
import styles from "./HomeStyles.module.css";
import { NewsComp } from "./NewsComp";

export const Home = (props) => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.newsWrapper}>
        <NewsComp article={props.newsStorage[0]}></NewsComp>
        <NewsComp article={props.newsStorage[1]}></NewsComp>
        <NewsComp article={props.newsStorage[2]}></NewsComp>
      </div>
      <div className={styles.weatherContentWrapper}>
        {props.cityChoiceMode && (
          <CityInputForm
            onSubmitCityHandler={props.onSubmitCityHandler}
            setcityChoiceMode={props.setcityChoiceMode}
          />
        )}
        {!props.cityChoiceMode && (
          <WeatherContainer
            data={props.data}
            setcityChoiceMode={props.setcityChoiceMode}
            setWeatherData={props.setWeatherData}
          ></WeatherContainer>
        )}
      </div>
    </div>
  );
};
