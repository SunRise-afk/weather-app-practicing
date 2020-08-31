import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";

export const CityInputForm = (props) => {
  const cityForm = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: (values) => {
      props.onSubmitCityHandler(values);
      props.setcityChoiceMode(false);
    },
  });
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={cityForm.handleSubmit}>
        <h3 style={{ marginBottom: "30px" }}>
          Type in other city to find out the weather in it
        </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            id="city"
            name="city"
            type="text"
            onChange={cityForm.handleChange}
            value={cityForm.values.city}
            style={{
              border: "2px rgb(215, 162, 1) solid",
              height: "48px",
              width: "250px",
              borderRadius: "0.3rem",
            }}
          ></input>
          <Button type={"submit"} className="btn btn-lg btn-warning">
            Show me weather
          </Button>
        </div>
      </form>
    </div>
  );
};
