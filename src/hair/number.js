import React, { useState } from "react";

function NumberInfo({ formData, setFormData }) {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setNumber(value);

    // Validate if the input contains alphabetic letters
    if (/[a-zA-Z]/.test(value)) {
      setError("Number should only contain numeric digits");
    } else {
      setError("");
    }

    // Update parent component's state
    setFormData({ ...formData, number: value });
  };

  return (
    <div className="personal-info-container mb-4">
      <input
        className="w-75 border-0"
        type="text"
        placeholder="Enter Your Number"
        value={number}
        onChange={handleChange}
        id="name_inp"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default NumberInfo;
