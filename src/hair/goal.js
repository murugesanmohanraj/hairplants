import React from "react";
import "./form.css";
import img from "../img/face8.png";
import img1 from "../img/face2.png";
import img3 from "../img/face3.png";
import img4 from "../img/face4.png";
import img5 from "../img/face5.png";
import img6 from "../img/face6.png";

function Looklike({ faceShape, setFaceShape }) {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", fontSize: 17 }}>
        Which face shape best suits you?
      </div>

      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-20px" }}
      >
        <div class="row w-100 mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100 text-center">
                <img
                  src={img}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "110px",
                    width: "100px",
                    objectFit: "contain",
                    backgroundColor: "white",
                    marginBottom: "5px",
                  }}
                />
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <img
                  src={img1}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-10px", marginLeft: "-5px" }}
      >
        <div class="row w-100  mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100 text-center">
                <div class="form-check">
                  <input
                    class=""
                    type="radio"
                    name="flexRadioDefault"
                    checked={faceShape === "heart"}
                    onClick={() => setFaceShape("heart")}
                  ></input>
                  &nbsp;
                  <label class="form-check-label" for="flexRadioDefault1">
                    HEART
                  </label>
                </div>
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <div class="form-check">
                  <input
                    class=""
                    type="radio"
                    name="flexRadioDefault"
                    checked={faceShape === "triangle"}
                    onClick={() => setFaceShape("triangle")}
                  ></input>
                  &nbsp;
                  <label class="form-check-label" for="flexRadioDefault1">
                    TRIANGLE
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-80px" }}
      >
        <div class="row w-100 mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100 text-center">
                <img
                  src={img3}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    backgroundColor: "white",
                  }}
                />
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <img
                  src={img4}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-25px", marginLeft: "-13px" }}
      >
        <div class="row w-100  mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100 text-center">
                <div class="form-check">
                  <input
                    class=""
                    type="radio"
                    name="flexRadioDefault"
                    checked={faceShape === "oval"}
                    onClick={() => setFaceShape("oval")}
                  ></input>
                  &nbsp;
                  <label class="form-check-label" for="flexRadioDefault1">
                    OVAL
                  </label>
                </div>
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <div class="form-check">
                  <input
                    class=""
                    type="radio"
                    name="flexRadioDefault"
                    checked={faceShape === "round"}
                    onClick={() => setFaceShape("round")}
                  ></input>
                  &nbsp;
                  <label class="form-check-label" for="flexRadioDefault1">
                    ROUND
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-80px", marginLeft: "5px" }}
      >
        <div class="row w-100 mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100 text-center">
                <img
                  src={img5}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    backgroundColor: "white",
                  }}
                />
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <img
                  src={img6}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "contain",
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>

      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-25px", marginLeft: "-3px" }}
      >
        <div class="row w-100  mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100 text-center">
                <div class="form-check">
                  <input
                    class=""
                    type="radio"
                    name="flexRadioDefault"
                    checked={faceShape === "diamond"}
                    onClick={() => setFaceShape("diamond")}
                  ></input>
                  &nbsp;
                  <label class="form-check-label" for="flexRadioDefault1">
                    DIAMOND
                  </label>
                </div>
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <div class="form-check">
                  <input
                    class=""
                    type="radio"
                    name="flexRadioDefault"
                    checked={faceShape === "square"}
                    onClick={() => setFaceShape("square")}
                  ></input>
                  &nbsp;
                  <label class="form-check-label" for="flexRadioDefault1">
                    SQUARE
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Looklike;
