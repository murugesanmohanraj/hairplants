import React, { useState } from "react";

function Ageinfo({ formData, setFormData }) {
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setAge(value);

    // Validate if the input contains alphabetic letters
    if (/[a-zA-Z]/.test(value)) {
      setError("Age should only contain numeric digits");
    } else {
      setError("");
    }

    // Update parent component's state
    setFormData({ ...formData, age: value });
  };

  return (
    <div className="sign-up-container mb-4">
      <input
        className="w-75 border-0"
        type="number"
        placeholder="Enter Your Age"
        value={age}
        onChange={handleChange}
        id="name_inp"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Ageinfo;
