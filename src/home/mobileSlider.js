import React, { useState } from "react";
import one from "./img/col/1.jpg";
import two from "./img/col/2.jpg";
import three from "./img/col/3.jpg";
import four from "./img/col/4.jpg";
import five from "./img/col/5.jpg";
import six from "./img/col/6.jpg";
import seven from "./img/col/7.jpg";
import eight from "./img/col/8.jpg";
import nine from "./img/col/9.jpg";
import ten from "./img/col/10.jpg";
import eleven from "./img/col/11.jpg";
import google from "./img/google-icon.webp";
import "./slider.css";
import { Carousel } from "antd";

const MobileSlider = () => {
  const [buttonName, setButtonName] = useState(null);

  const changeButtonName = (i) => {
    if (i === buttonName) {
      setButtonName(null);
    } else {
      setButtonName(i);
    }
  };

  const data = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
  ];

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <div>
        <Carousel arrows dots={false} afterChange={onChange}>
          {data.map((itm, i) => (
            <div key={i}>
              <div key={i}>
                <div id="review">
                  <div class="thumbnail shadow-none bg-light border">
                    <img
                      src={itm}
                      alt=""
                      style={{
                        maxHeight: 200,
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="p-2">
                      <h5 class="card-title mt-2">
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "orange", cursor: "pointer" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "orange", cursor: "pointer" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "orange", cursor: "pointer" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "orange", cursor: "pointer" }}
                        ></i>
                        <i
                          class="fa-solid fa-star"
                          style={{ color: "#ccc", cursor: "pointer" }}
                        ></i>
                      </h5>
                      <p class="card-text entireText">
                        Thank you very much for the wonderful job that you did
                        for me.I unnoticed.{" "}
                        <button
                          className="carouselButton"
                          onClick={() => changeButtonName(i)}
                        >
                          {i === buttonName ? "Show less" : "Read more"}
                        </button>
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 10,
                          marginTop: 10,
                        }}
                      >
                        <div class="card-text">
                          <small class="text-body-secondary">
                            <div> Gopinath</div>
                            <div>Software engineer, Chennai</div>
                          </small>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src={google} height={15} width={15} alt="" />
                          <small class="text-body-secondary">
                            <div className="ml-2">Posted on Google</div>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MobileSlider;
