import React from "react";
import { Weather } from "./Weather";
import { CityInputForm } from "./CityInputForm";

export const Home = (props) => {
  return (
    <div>
      Home
      {props.cityChoiceMode && (
        <CityInputForm
          onSubmitCityHandler={props.onSubmitCityHandler}
          setcityChoiceMode={props.setcityChoiceMode}
        />
      )}
      {!props.cityChoiceMode && (
        <Weather
          data={props.data}
          setcityChoiceMode={props.setcityChoiceMode}
          setWeatherData={props.setWeatherData}
        ></Weather>
      )}
    </div>
  );
};
