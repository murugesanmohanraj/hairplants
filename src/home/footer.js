import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import location from "./img/location1.png";
import { Col, Row } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <div>
      <div class="container-fluid pb-4" id="footer_container">
        <Row gutter={16} style={{ margin: 0 }}>
          <Col lg={6} md={6} sm={0} xs={0}>
            <ul>
              <h4 id="h4">Company</h4>
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
              <Link to="/science">
                <li>Science</li>
              </Link>
              <Link to="/ourstory">
                <li>Our Story</li>
              </Link>
              <Link to="/blogs">
                <li>Blog</li>
              </Link>
              <Link to="/hairtreatment">
                <li>Hair Treatment for Men</li>
              </Link>
            </ul>
          </Col>
          <Col lg={6} md={6} sm={0} xs={0}>
            <ul>
              <h4 id="h4"> Legal</h4>
              <Link to="/privacypolicy">
                <li>Privacy Policy</li>
              </Link>
              <Link to="/terms">
                <li>Terms of Service</li>
              </Link>
              <div style={{ display: "flex", marginTop: 10, marginLeft: 10 }}>
                <div>
                  <FacebookFilled
                    style={{ color: "#007bff", fontSize: 30, marginRight: 20 }}
                  />
                </div>
                <div>
                  <InstagramFilled
                    style={{ color: "#ff6307", fontSize: 30, marginRight: 20 }}
                  />
                </div>
                <div>
                  <WhatsAppOutlined
                    style={{ color: "#198754", fontSize: 30 }}
                  />
                </div>
              </div>
            </ul>
          </Col>
          <Col lg={6} md={6} sm={0} xs={0}>
            <ul>
              <h4 id="h4">Address</h4>
              <li>
                Dr.Prabhakar Hair Transplant clinic, 2nd floor, kovai ENT
                building complex, CMS bus stop, sathy main road, ganapathy ,
                coimbatore- 641006
                <br />
                98345 12885
              </li>
            </ul>
          </Col>
          <Col lg={6} md={6} sm={0} xs={0}>
            <img
              src={logo}
              height={70}
              width={130}
              id="img"
              alt=""
              style={{ marginLeft: "10px", marginTop: "55px" }}
            />
            <br />
            <Link
              to="/location"
              id="location"
              style={{ color: "white", textDecoration: "none" }}
            >
              <img src={location} height={60} width={60} alt="" />
            </Link>
          </Col>
          <Col lg={0} md={0} sm={0} xs={0}>
            <img
              src={logo}
              height={70}
              width={130}
              alt=""
              style={{ marginTop: "55px", marginLeft: 20 }}
            />
          </Col>
          <Col lg={0} md={0} sm={0} xs={0}>
            <ul>
              <h4 id="h4">Address</h4>
              <li>
                Dr.Prabhakar Hair Transplant clinic, 2nd floor, kovai ENT
                building complex, CMS bus stop, sathy main road, ganapathy ,
                coimbatore- 641006
                <br />
                98345 12885
              </li>
            </ul>
          </Col>
          <Col lg={0} md={0} sm={0} xs={0}>
            <div style={{ height: "100%", position: "relative" }}>
              <Link
                to="/location"
                id="location9"
                style={{
                  color: "white",
                  textDecoration: "none",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%)",
                }}
              >
                <img src={location} height={70} width={70} alt="" />
              </Link>
            </div>
          </Col>
          <Col lg={24} md={24} sm={0} xs={0}>
            <center>
              <br />
              <span style={{ color: "#ccc" }}>
                © Copyright 2024 All Right Reserved - Kitkat Software Solution
              </span>
              <br />
            </center>
          </Col>
        </Row>
      </div>
      <Row gutter={0} style={{ margin: 0 }}>
        <Col lg={0} md={0} sm={24} xs={24}>
          <div id="footer_container" className="pb-5">
            <Row gutter={0} style={{ margin: 0 }}>
              <Col lg={0} md={0} sm={12} xs={12}>
                <ul>
                  <h4 id="h4">Company</h4>
                  <Link to="/faq">
                    <li>FAQ</li>
                  </Link>
                  <Link to="/science">
                    <li>Science</li>
                  </Link>
                  <Link to="/ourstory">
                    <li>Our Story</li>
                  </Link>
                  <Link to="/blogs">
                    <li>Blog</li>
                  </Link>
                  <Link to="/hairtreatment">
                    <li>Hair Treatment for Men</li>
                  </Link>
                </ul>
              </Col>
              <Col lg={0} md={0} sm={12} xs={12}>
                <ul>
                  <h4 id="h4"> Legal</h4>
                  <Link to="/privacypolicy">
                    <li>Privacy Policy</li>
                  </Link>
                  <Link to="/terms">
                    <li>Terms of Service</li>
                  </Link>
                  <div
                    style={{ display: "flex", marginTop: 10, marginLeft: 10 }}
                  >
                    <div>
                      <FacebookFilled
                        style={{
                          color: "#007bff",
                          fontSize: 30,
                          marginRight: 20,
                        }}
                      />
                    </div>
                    <div>
                      <InstagramFilled
                        style={{
                          color: "#ff6307",
                          fontSize: 30,
                          marginRight: 20,
                        }}
                      />
                    </div>
                    <div>
                      <WhatsAppOutlined
                        style={{ color: "#198754", fontSize: 30 }}
                      />
                    </div>
                  </div>
                </ul>
              </Col>
              <Col lg={0} md={0} sm={24} xs={24}>
                <center>
                  <img
                    src={logo}
                    height={70}
                    width={160}
                    alt=""
                    style={{ marginTop: "25px" }}
                  />
                </center>
              </Col>
              <Col lg={0} md={0} sm={16} xs={16}>
                <ul>
                  <h4 id="h4">Address</h4>
                  <li>
                    Dr.Prabhakar Hair Transplant clinic, 2nd floor, kovai ENT
                    building complex, CMS bus stop, sathy main road, ganapathy ,
                    coimbatore- 641006
                    <br />
                    98345 12885
                  </li>
                </ul>
              </Col>
              <Col lg={0} md={0} sm={8} xs={8}>
                <div style={{ height: "100%", position: "relative" }}>
                  <Link
                    to="/location"
                    id="location9"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      position: "absolute",
                      top: "40%",
                      left: "50%",
                      transform: "translate(-50%)",
                    }}
                  >
                    <img src={location} height={80} width={80} alt="" />
                  </Link>
                </div>
              </Col>
              <Col lg={0} md={0} sm={24} xs={24}>
                <center>
                  <br />
                  <span className="pl-4 pr-4" style={{ color: "#ccc" }}>
                    © Copyright 2024 - Kitkat Software Solution
                  </span>
                  <br />
                </center>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
