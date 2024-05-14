import React from "react";
import logo from "./img/logo.png";
import { WhatsAppOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{ borderBottom: "1px solid #80808047" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img
              src={logo}
              height={60}
              width={200}
              alt=""
              class="logo-img"
              style={{ height: 75, objectFit: "contain" }}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="button"
              class="btn btn-light mr-4"
              id="button-2"
              onClick={() => navigate("/testForm")}
            >
              I want to know the cost
            </button>
            <WhatsAppOutlined
              style={{
                color: "green",
                fontSize: 30,
                marginTop: 5,
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
