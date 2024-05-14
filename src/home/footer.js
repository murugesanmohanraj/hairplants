import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import instagram from "./img/insta.jpg";
import whatsapp from "./img/whatsapp.png";
import facebook from "./img/facebook.jpg";
import location from "./img/location1.png";

function Footer() {
  return (
    <div>
      <div class="container-fluid p-5" id="footer_container">
        <div class="container">
          <div class="row">
            <div class="col-md">
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
            </div>
            <div class="col-md">
              <ul>
                <h4 id="h4"> Legal</h4>
                <Link to="/privacypolicy">
                  <li>Privacy Policy</li>
                </Link>
                <Link to="/terms">
                  <li>Terms of Service</li>
                </Link>
                <span>
                  <img src={facebook} height={30} width={30} alt="" />

                  <a
                    href="https:Wa.me://+919834512885"
                    class="whatsapp_float_1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={whatsapp} height={30} width={30} alt="" />
                  </a>

                  <img src={instagram} height={30} width={30} alt="" />
                </span>
              </ul>
            </div>
            <div class="col-md" id="address">
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
            </div>
            <div class="col-md">
              <img
                src={logo}
                height={70}
                width={190}
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
                <img src={location} height={80} width={80} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
