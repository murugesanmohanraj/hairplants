import React from "react";
import Collapses from "./collapse";
import Footer from "./footer";
import Headers from "./header";
import Banner from "./banner";
import Cards from "./cards";
import Hair1 from "./img/new/1.png";
import Hair2 from "./img/new/2.png";
import Hair3 from "./img/new/3.png";
import { useNavigate } from "react-router-dom";
import { Carousel, Col, Row } from "antd";
import Sliders from "./slider";
import "./index.css";
import MobileSlider from "./mobileSlider";
import Review from "./review";
import MobileReview from "./mobileReview";

const Home = () => {
  const cardsData = [
    {
      img: Hair1,
      title: "Stage 2 baldness",
      desc1: "2210 grafts",
      desc2: "After 6 months",
    },
    {
      img: Hair2,
      title: "Stage 3 baldness",
      desc1: "3420 grafts",
      desc2: "After 7 months",
    },
    {
      img: Hair3,
      title: "Stage 4 baldness",
      desc1: "4507 grafts",
      desc2: "After 9 months",
    },
  ];

  const circleData = [
    {
      title: "Nano FUE Technique",
      desc: "Our advanced nano (sapphire) fue instruments are nearly 50% smaller than standard ones, allowing us to make extremely precise incisions, resulting in exceptionally natural and artistic hairlines.",
    },
    {
      title: "Crafted specially for you",
      desc: "We understand the uniqueness of each indivudual’s face shape and hair type. so, our doctor designs a personalized hairline tailored specifically to suit you,ensuring remarkablly natural apperance.",
    },
    {
      title: "Expert surgical team",
      desc: "Our team is highly skilled and experienced,especially in using Nano instruments,thanks to years of training and treating countless patients, enabling us to consistently achieve excellent results",
    },
  ];

  const navigate = useNavigate();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <Headers />
      <div className="w-100" style={{ height: 76 }}></div>
      <Banner />
      <div className="container pt-5 pb-4">
        <h3
          style={{ fontWeight: "bold", marginBottom: 50, textAlign: "center" }}
        >
          Look at our natural results!
        </h3>
        <Cards cardsData={cardsData} />
        <div className="mt-4">
          <center>
            <button
              type="button"
              class="btn btn-light"
              id="button-2"
              onClick={() => navigate("/testForm")}
            >
              I want to know the cost
            </button>
          </center>
        </div>
      </div>
      <div className="container pt-4 pb-5">
        <h3
          style={{ fontWeight: "bold", marginBottom: 50, textAlign: "center" }}
        >
          How is it possible for us?
        </h3>
        <div className="laptop">
          <Row gutter={16} style={{ margin: 0 }}>
            {circleData.map((itm, i) => (
              <Col lg={8} md={8} sm={24} xs={24} key={i}>
                <div
                  style={{
                    backgroundColor: "#e0e0e061",
                    border: "1px solid #119f6f",
                    padding: 20,
                    borderRadius: 4,
                    minHeight: 220,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#119f6f",
                        fontSize: 18,
                        marginBottom: 10,
                      }}
                    >
                      {itm.title}
                    </div>
                    <div>{itm.desc}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="mobile">
          <Carousel arrows dots={false} afterChange={onChange}>
            {circleData.map((itm, i) => (
              <div key={i}>
                <div
                  style={{
                    backgroundColor: "#e0e0e061",
                    border: "1px solid #119f6f",
                    padding: 20,
                    borderRadius: 4,
                    minHeight: 220,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#119f6f",
                        fontSize: 18,
                        marginBottom: 10,
                      }}
                    >
                      {itm.title}
                    </div>
                    <div>{itm.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="mt-4 sliderContainer">
        <h3
          style={{ fontWeight: "bold", marginBottom: 50, textAlign: "center" }}
        >
          Our results
        </h3>
        <div className="laptop">
          <Sliders />{" "}
        </div>
        <div className="mobile">
          <MobileSlider />{" "}
        </div>
      </div>
      <div className="pt-4 pb-4" style={{ borderTop: "1px solid #80808047" }}>
        <div className="container-fluid">
          <Collapses />
        </div>
      </div>
      <div>
        <div className="laptop">
          <Review />
        </div>
        <div className="mobile">
          <MobileReview />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
