import React, { useEffect } from "react";
import four from "./img/new/4.png";
import five from "./img/new/5.png";
import six from "./img/new/6.png";
import seven from "./img/new/7.png";
import eight from "./img/new/8.png";
import nine from "./img/new/9.png";
import ten from "./img/new/10.png";
import eleven from "./img/new/11.png";
import "./slider.css";
import { Carousel } from "antd";

const MobileSlider = () => {
  const data = [
    {
      img: four,
      tag1: "Stage 3 baldness.",
      tag2: "Corrected with 2550 grafts.",
      tag3: "After 10 months result.",
    },
    {
      img: five,
      tag1: "Stage 4 baldness.",
      tag2: "Treated with 4130 grafts.",
      tag3: "After 12 months result.",
    },
    {
      img: six,
      tag1: "Stage 6 baldness.",
      tag2: "Treated with 3800 grafts.",
      tag3: "After 10 months result.",
    },
    {
      img: seven,
      tag1: "Stage 5 baldness.",
      tag2: "Corrected with 4580 grafts.",
      tag3: "After 10 months result.",
    },
    {
      img: eight,
      tag1: "Stage 4 baldness.",
      tag2: "Treated with 4260 grafts.",
      tag3: "After 10 months result.",
    },
    {
      img: nine,
      tag1: "Stage 7 baldness.",
      tag2: "Corrected with 7430 grafts.",
      tag3: "After 14 months result.",
    },
    {
      img: ten,
      tag1: "Stage 7 baldness.",
      tag2: "Corrected with 7430 grafts.",
      tag3: "After 14 months result.",
    },
    {
      img: eleven,
      tag1: "Stage 3 baldness.",
      tag2: "Treated with 3440 grafts.",
      tag3: "After 12 months result.",
    },
  ];

  useEffect(() => {
    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

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
                      src={itm.img}
                      alt=""
                      style={{
                        height: 180,
                        width: "100%",
                        objectFit: "cover",
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="p-2">
                      <div style={{ fontSize: 16, textAlign: "center" }}>
                        <div className="mb-3 mt-3" style={{ fontWeight: 600 }}>
                          {itm.tag1}
                        </div>
                        <div className="mb-3" style={{ color: "#777" }}>
                          {itm.tag2}
                        </div>
                        <div className="mb-3" style={{ color: "#777" }}>
                          {itm.tag3}
                        </div>
                      </div>
                      {/* <p class="card-text entireText">
                        Thank you very much for the wonderful job that you did
                        for me.I unnoticed.{" "}
                        <button
                          className="carouselButton"
                          onClick={() => changeButtonName(i)}
                        >
                          {i === buttonName ? "Show less" : "Read more"}
                        </button>
                      </p> */}
                      {/* <div
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
                      </div> */}
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
