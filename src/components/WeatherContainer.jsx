import React from "react";
import { Button } from "react-bootstrap";
import { Weather } from "./Weather";
import sadTear from "../common/sad-tear-solid.svg";

export const WeatherContainer = (props) => {
  let message = "";
  if (props.data.errorStatus) {
    message = props.data.errorText;
  } else {
    message = {
      city_name: props.data.city_name,
      temp: Math.floor(props.data.temp),
      feels_like: Math.floor(props.data.feels_like),
      humidity: props.data.humidity,
      pressure: (props.data.pressure * 100 * 0.00750062).toFixed(2),
      weather_description: props.data.weather_description,
      weather_icon: props.data.weather_icon,
    };
  }
  return (
    <div>
      <div className="text-center" style={{ marginBottom: "30px" }}>
        <Button
          className="btn btn-lg btn-warning"
          onClick={() => {
            props.setWeatherData({ errorStatus: false });
            props.setcityChoiceMode(true);
          }}
        >
          Get other cities weather
        </Button>
      </div>
      <div>
        {props.data.errorStatus ? (
          <div
            style={{ margin: "0 auto", fontSize: "35px", fontWeight: "800" }}
          >
            <p>
              Sorry, but something goes wrong.
              <img
                src={sadTear}
                alt="sad"
                style={{ width: "30px", marginLeft: "5px" }}
              />
            </p>
            <ul>
              <li>
                <p>Please try to write the city correctly.</p>
              </li>
              <li>
                <p>
                  Also this message may be caused by problems on the server.{" "}
                </p>
              </li>
            </ul>
          </div>
        ) : (
          <Weather message={message}></Weather>
        )}
      </div>
    </div>
  );
};
