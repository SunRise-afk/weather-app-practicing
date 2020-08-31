import React from "react";
import temperatureLowSolid from "../common/temperature-low-solid.svg";
import temperatureHighSolid from "../common/temperature-high-solid.svg";
import windSolid from "../common/wind-solid.svg";
import tintSolid from "../common/tint-solid.svg";
import caretDownSolid from "../common/caret-down-solid.svg";
import styles from "./WeatherStyles.module.css";

export const Weather = (props) => {
  return (
    <div className={styles.weatherContainer}>
      <div className={styles.weatherRow}>
        <div>
          <h3>
            Temperature in {props.message.city_name}: {props.message.temp}
            <img
              src={
                props.message.temp < 0
                  ? temperatureLowSolid
                  : temperatureHighSolid
              }
              className={styles.weathImg}
              alt="icon"
            />
            C
          </h3>
        </div>
        <div>
          <h3>
            Feels like {props.message.feels_like} °C
            <img src={windSolid} className={styles.weathImg} alt="icon" />
          </h3>
        </div>
      </div>
      <div className={styles.weatherRow}>
        <div>
          <h3>
            Weather description: {props.message.weather_description}
            <img
              src={`http://openweathermap.org/img/wn/${props.message.weather_icon}@2x.png`}
              className={`${styles.weathImg} ${styles.weathImgDescription}`}
              alt="icon"
            />
          </h3>
        </div>
      </div>

      <div className={`${styles.weatherRow} ${styles.weatherRowLong}`}>
        <div>
          <h3>
            Humidity in {props.message.city_name}: {props.message.humidity}%
            <img
              src={tintSolid}
              className={`${styles.weathImg} ${styles.weathImgHum}`}
              alt="icon"
            />
          </h3>
        </div>
        <div>
          <h3>
            Pressure in {props.message.city_name}: {props.message.pressure} mmHg
            <img src={caretDownSolid} className={styles.weathImg} alt="icon" />
          </h3>
        </div>
      </div>
    </div>
  );
};
