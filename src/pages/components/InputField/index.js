import React from "react";

function InputField({ placeHolder, type, label, name, onChange }) {
  return (
    <>
      <input
        className="input-field"
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        type={type}
      />
      <label htmlFor="input-field" className="input-label">
        {label}
      </label>
      <span className="input-highlight"></span>
    </>
  );
}

export default InputField;
