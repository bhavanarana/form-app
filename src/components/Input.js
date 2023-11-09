import React, { useState } from "react";
const Input = ({
  nameLabel,
  cinput,
  clabel,
  clabelInput,
  error,
  setError,
  setValue,
  validationFunc,
  cerror,
  value,
  isMatch,
  type = "text",
  minLength,
  maxLength,
  errorMessage,
  regx,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={clabelInput}>
      <label className={clabel}>{nameLabel}</label>
      <div className="input-container">
        <input
          className={cinput}
          type={showPassword ? "text" : type}
          minLength={minLength}
          maxLength={maxLength}
          onChange={(e) => {
            if (!validationFunc) {
              setValue(e, value);
            } else if (isMatch) {
              validationFunc(e, errorMessage, setError, value);
            } else {
              validationFunc(e, errorMessage, setValue, setError, value, regx);
            }
          }}
        />
        {type === "password" && (
          <span className="eye-icon" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <ion-icon name="eye-outline"></ion-icon>
            ) : (
              <ion-icon name="eye-off-outline"></ion-icon>
            )}
          </span>
        )}
      </div>
      {error && <p className={cerror}>{error}</p>}
    </div>
  );
};
export default Input;
