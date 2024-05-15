import React, { useEffect, useState } from "react";
import logo from "./img/logo.png";
import { WhatsAppOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      style={{
        borderBottom: "1px solid #80808047",
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
        zIndex: 99,
      }}
    >
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
            {screenWidth > 767 ? (
              <button
                type="button"
                class="btn btn-light mr-4"
                id="button-2"
                onClick={() => navigate("/testForm")}
              >
                I want to know the cost
              </button>
            ) : (
              showButton && (
                <button
                  type="button"
                  class="btn btn-light mr-4"
                  id="button-2"
                  onClick={() => navigate("/testForm")}
                  style={{ fontSize: 15 }}
                >
                  I want to know the cost
                </button>
              )
            )}
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
