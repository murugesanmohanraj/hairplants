import React, { useState } from "react";
import { Col, Row } from "antd";

function Nameinfo({ aboutYou, setAboutYou }) {
  const [error, setError] = useState("");
  const [emailerror, setemailError] = useState("");
  const [numerror, setnumError] = useState("");
  const [ageerror, setageError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    if (e.target.name === "name") {
      if (/\d/.test(value)) {
        setError("Name should not contain numbers");
      } else {
        setError("");
        setAboutYou((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name === "email") {
      setemailError("");
      setAboutYou((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name === "age") {
      if (/[a-zA-Z]/.test(value)) {
        setageError("Age should only contain numeric digits");
      } else {
        setageError("");
        setAboutYou((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name === "number") {
      if (/[a-zA-Z]/.test(value)) {
        setnumError("Number should only contain numeric digits");
      } else {
        setnumError("");
        setAboutYou((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    }
  };

  return (
    <div className="mb-4">
      <Row gutter={16} style={{ margin: 0 }}>
        <Col lg={12} md={12} sm={24} xs={24}>
          <div className="sign-up-container mb-4">
            <input
              className="w-75 border-0"
              type="text"
              placeholder="Your Name"
              value={aboutYou.name}
              onChange={handleChange}
              id="name_inp"
              name="name"
            />
            {error && <div className="error-message">{error}</div>}
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <div className="sign-up-container mb-4">
            <input
              className="w-75 border-0"
              type="number"
              placeholder="Enter Your Age"
              id="name_inp"
              name="age"
              value={aboutYou.age}
              onChange={handleChange}
            />
            {ageerror && <div className="error-message">{ageerror}</div>}
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <div className="personal-info-container mb-4">
            <input
              className="w-75 border-0"
              type="text"
              placeholder="Enter Your Number"
              id="name_inp"
              name="number"
              value={aboutYou.number}
              onChange={handleChange}
              maxLength={10}
            />
            {numerror && <div className="error-message">{numerror}</div>}
          </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <div className="other-info-container mb-4">
            <input
              className="w-75 border-0"
              type="email"
              placeholder="@Email"
              id="name_inp"
              name="email"
              value={aboutYou.email}
              onChange={handleChange}
            />
            {emailerror && <div className="error-message">{emailerror}</div>}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Nameinfo;
