import React from "react";
import { Button } from "react-bootstrap";

export const Weather = (props) => {
  return (
    <div>
      <div>
        {props.data}
        {/* "Sorry, but something goes wrong. You can try to rewrite your city or that message may be called by troubles on server" */}
      </div>
      <Button
        onClick={() => {
          props.setWeatherData(null);
          props.setcityChoiceMode(true);
        }}
      >
        Get other cities weather
      </Button>
    </div>
  );
};
