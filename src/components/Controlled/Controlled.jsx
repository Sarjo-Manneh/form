import React, { useState } from "react";
import "./Controlled.css";
export default function ControlledComponent() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form>
    <h1>Fill  the form below</h1>
      <label>
        Input Value:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <p className="controlled__text">Input Value: {inputValue}</p>
    </form>
  );
}
