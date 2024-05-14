import React, { useState } from "react";

function EmailInfo({ formData, setFormData }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setFormData({ ...formData, email: value }); // Update parent component's state

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  return (
    <div className="other-info-container mb-4">
      <input
        className="w-75 border-0"
        type="email"
        placeholder="@Email"
        value={email}
        onChange={handleChange}
        id="name_inp"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default EmailInfo;
