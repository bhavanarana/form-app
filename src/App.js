import "./App.css";
import React from "react";
import { useState } from "react";
import Input from "./components/Input";
import * as Constants from "./constants";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";

function App() {
  const [object, setObject] = useState(Constants.OBJECT_ELEMENT);
  const [fnameError, setFNameError] = useState(null);
  const [lnameError, setLNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [reEmailError, setReEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [cityError, setCityError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [zipError, setzipError] = useState(null);

  const months = Constants.MONTH;
  const states = Constants.STATE_NAMES;
  const days = Constants.DAY;
  const years = Constants.YEAR;

  const handleValidation = (
    e,
    errorMessage,
    setValue,
    setError,
    value,
    regx
  ) => {
    const inputValue = e.target.value;
    if (regx.test(inputValue)) {
      setValue(e, value);
      setError(null);
    } else {
      setValue(e, value);
      setError(errorMessage);
    }
  };
  const handleMatchValidation = (e, errorMessage, setError, value) => {
    const inputValue = e.target.value;
    const checkEmail = object[value];
    console.log(inputValue);
    console.log(checkEmail);
    if (inputValue !== checkEmail) {
      setError(errorMessage);
    } else {
      setError("");
    }
  };
  const setValue = (e, value) => {
    setObject({ ...object, [value]: e.target.value });
  };
  const setValueDOB = (e, select) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    setObject((prevObject) => ({
      ...prevObject,
      dob: {
        ...prevObject.dob,
        [select]: selectedValue,
      },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !fnameError &&
      !lnameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError &&
      !reEmailError &&
      !cityError &&
      !phoneError &&
      !zipError
    ) {
      console.log("Form submitted successfully!");
      console.log(object);
    } else {
      console.log("Form validation failed. Please check the errors.");
    }
  };
  return (
    <div className="App">
      <form className="container" autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <Header head={Constants.FIRST_HEAD} chead="heading" />
          <Input
            nameLabel={Constants.FIRST_NAME}
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            error={fnameError}
            setError={setFNameError}
            setValue={setValue}
            cerror="error-message"
            validationFunc={handleValidation}
            regx={Constants.CHAR_REGX}
            errorMessage="First name must be only string without white spaces"
            value="fname"
          />
          <Input
            nameLabel={Constants.LAST_NAME}
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            error={lnameError}
            setError={setLNameError}
            setValue={setValue}
            cerror="error-message"
            validationFunc={handleValidation}
            regx={Constants.CHAR_REGX}
            errorMessage="Last name must be only string without white spaces"
            value="lname"
          />
          <Dropdown
            label="Date of Birth:"
            select="month"
            options={months}
            setValue={(e) => setValueDOB(e, "month")}
            cdropdownDiv="dropdown-div"
            cdropdownLabel="label"
            cdropdownInput="dropdown-input"
          />
          <Dropdown
            label=""
            select="day"
            options={days}
            setValue={(e) => setValueDOB(e, "day")}
            cdropdownDiv="dropdown-div"
            cdropdownLabel="dropdown-label"
            cdropdownInput="dropdown-input"
          />
          <Dropdown
            label=""
            select="year"
            options={years}
            setValue={(e) => setValueDOB(e, "year")}
            cdropdownDiv="dropdown-div"
            cdropdownLabel="dropdown-label"
            cdropdownInput="dropdown-input"
          />
          <div className="flex">
            <p className="label">Gender: </p>
            <input
              type="radio"
              value="male"
              name="gender"
              className="input"
              onChange={(e) => setValue(e, "gender")}
            />
            Male
            <input
              type="radio"
              value="female"
              name="gender"
              className="select-option"
              onChange={(e) => setValue(e, "gender")}
            />
            Female
          </div>
          <Header head={Constants.SECOND_HEAD} chead="heading" />
          <Input
            nameLabel={Constants.EMAIL_NAME}
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            error={emailError}
            setError={setEmailError}
            setValue={setValue}
            value="email"
            cerror="error-message"
            validationFunc={handleValidation}
            errorMessage="Enter valid email"
            regx={Constants.EMAIL_REGX}
          />
          <Input
            nameLabel={Constants.RE_EMAIL_NAME}
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            error={reEmailError}
            setError={setReEmailError}
            setValue={setValue}
            isMatch="true"
            value="email"
            cerror="error-message"
            validationFunc={handleMatchValidation}
            errorMessage="Confirm Email must match"
          />
          <Input
            nameLabel={Constants.PASSWORD_NAME}
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            error={passwordError}
            setError={setPasswordError}
            setValue={setValue}
            value="password"
            cerror="error-message"
            validationFunc={handleValidation}
            regx={Constants.PASSWORD_REGX}
            errorMessage="Min. 8 Characters, 1 number, 1 upper-case, 1 lower-case, 1 special-character"
            type="password"
          />
          <Input
            nameLabel={Constants.RE_PASSWORD_NAME}
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            error={confirmPasswordError}
            setError={setConfirmPasswordError}
            cerror="error-message"
            validationFunc={handleMatchValidation}
            errorMessage="Passwords do not match"
            isMatch="true"
            type="password"
            value="password"
          />
          <Header head={Constants.THIRD_HEAD} chead="heading" />
          <Input
            nameLabel={Constants.ADDRESS}
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            setValue={setValue}
            value="address"
          />
          <Input
            nameLabel={Constants.CITY}
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            error={cityError}
            setError={setCityError}
            setValue={setValue}
            cerror="error-message"
            // validationFunc={handleValidation}
            value="city"
          />
          <Dropdown
            label={Constants.STATE}
            select="Choose..."
            options={states}
            setValue={(e) => setValue(e, "state")}
            cdropdownDiv="dropdown-div"
            cdropdownLabel="dropdown-label"
            cdropdownInput="dropdown-input"
          />
          <Input
            nameLabel={Constants.PHONE}
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            error={phoneError}
            setError={setPhoneError}
            setValue={setValue}
            cerror="error-message"
            validationFunc={handleValidation}
            regx={Constants.PHONE_REGX}
            errorMessage="Invalid phone number"
            minLength="10"
            maxLength="10"
            value="phone"
          />
          <Dropdown
            label="Phone Type:"
            select="Choose..."
            options={["Mobile", "Landline"]}
            setValue={(e) => setValue(e, "phonetype")}
            cdropdownDiv="dropdown-div"
            cdropdownLabel="dropdown-label"
            cdropdownInput="dropdown-input"
          />
          <Input
            nameLabel="Zip Code:"
            minLength="6"
            maxLength="6"
            cinput="input"
            clabel="label"
            clabelInput="label-input"
            error={zipError}
            setError={setzipError}
            setValue={setValue}
            cerror="error-message"
            errorMessage="Invalid zip number"
            value="zipcode"
          />
          <input type="submit" value="Submit" className="button" />
        </div>
      </form>
    </div>
  );
}

export default App;
