import React, { useEffect, useState } from "react";
import bannerVid from "./img/bannerVid.mp4";
import "./banner.css";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";

const Banner = () => {
  const navigate = useNavigate();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="banner">
      <div className="banner2">
        <Row
          gutter={16}
          style={{
            margin: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col lg={12} md={12} sm={0} xs={0}>
            <div className="mb-5">
              <h1
                className="flex-item slideUp"
                id="para_1"
                style={{ fontWeight: "bold", fontSize: "3.5rem" }}
              >
                Hair Transplant that look completely natural,
                <br /> just like real hair
              </h1>
              <div className="mt-5">
                <button
                  type="button"
                  className="btn btn-light"
                  id="button-2"
                  onClick={() => navigate("/testForm")}
                >
                  I want to know the cost
                </button>
              </div>
            </div>
          </Col>
          <Col lg={0} md={0} sm={24} xs={24}>
            <div className="mt-4 mb-4 pl-3 pr-3">
              <br />
              <br />
              <br />
              <h2
                className="flex-item slideUp"
                id="para_1"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  fontSize: "3rem",
                }}
              >
                Hair Transplant that look completely natural, just like real
                hair
                <br />
                <div className="mt-5">
                  <button
                    type="button"
                    className="btn btn-light"
                    id="button-2"
                    onClick={() => navigate("/testForm")}
                  >
                    I want to know the cost
                  </button>
                </div>
              </h2>
              <br />
              <br />
              <br />
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24} style={{ padding: 0 }}>
            <div
              className="video-container"
              style={{ height: screenWidth <= 767 && screenHeight - 165 }}
            >
              <video
                width="100%"
                controls
                autoPlay
                className={screenWidth > 767 && "responsive-video"}
              >
                <source src={bannerVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
