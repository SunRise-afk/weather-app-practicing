import React from "react";
import { useFormik } from "formik";

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
    <div>
      <form onSubmit={cityForm.handleSubmit}>
        <label htmlFor="city">Write your city</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={cityForm.handleChange}
          value={cityForm.values.city}
        ></input>
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
};
