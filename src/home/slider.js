import React from "react";
import Slider from "react-slick";
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
import "./slider.css";

const Sliders = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      img: one,
      tag1: "Stage 4 baldness.",
      tag2: "Restored with 3570 grafts.",
      tag3: "After 10 months result.",
    },
    {
      img: two,
      tag1: "Stage 5 baldness.",
      tag2: "Restored with 4715 grafts.",
      tag3: "After 12 months result.",
    },
    {
      img: three,
      tag1: "Stage 4 baldness.",
      tag2: "Restored with 3800 grafts.",
      tag3: "After 9 months result.",
    },
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

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((itm, i) => (
            <div key={i} className="m-2">
              <div class="m-2" id="review">
                <div class="thumbnail shadow-none bg-light border">
                  <img
                    src={itm.img}
                    alt=""
                    style={{
                      height: 180,
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-2">
                    <h5
                      class="card-title mt-3 mb-4"
                      style={{ textAlign: "center" }}
                    >
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
                        style={{ color: "orange", cursor: "pointer" }}
                      ></i>
                    </h5>
                    <div style={{ fontSize: 16, textAlign: "center" }}>
                      <div className="mb-3" style={{ fontWeight: 600 }}>
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
                      Thank you very much for the wonderful job that you did for
                      me.I unnoticed.{" "}
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
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
