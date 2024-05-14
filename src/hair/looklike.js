import React from "react";
import "./form.css";
import img from "../img/head1 (1).png";
import img1 from "../img/head2.png";
import img2 from "../img/head3.png";
import img3 from "../img/head4.png";
import img4 from "../img/head5.png";
import img5 from "../img/head6.png";
import img6 from "../img/head7.png";
import img7 from "../img/head8.png";
import img8 from "../img/head9.png";
import img9 from "../img/head10.png";
import img10 from "../img/head11.png";
import img11 from "../img/head12.png";
import img12 from "../img/head13.png";
import img13 from "../img/head14.png";
import img14 from "../img/head15.png";
import img15 from "../img/head16.png";

function Looklike({ formData, setFormData }) {
  return (
    <>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 17,
          marginBottom: 40,
        }}
      >
        Which hair loss stage looks similar to yours?
      </div>
      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-30px" }}
      >
        <div class="row w-75 mt-3">
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
                    height: "70px",
                    width: "65px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={img1}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "60px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <img
                  src={img2}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "80px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={img3}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-35px", marginBottom: "20px" }}
      >
        <div class="row w-75  mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100">
                <input
                  class="mb-5"
                  type="radio"
                  name="flexRadioDefault"
                  checked={formData === "stage-1"}
                  onClick={() => setFormData("stage-1")}
                ></input>
                &nbsp;
                <label class="form-check-label mt-1" for="flexRadioDefault1">
                  Stage-1
                </label>
              </div>

              <div className="caption d-flex justify-content-center w-100">
                <input
                  class="mb-5"
                  type="radio"
                  name="flexRadioDefault"
                  checked={formData === "stage-2"}
                  onClick={() => setFormData("stage-2")}
                ></input>
                &nbsp;
                <label class="form-check-label mt-1" for="flexRadioDefault1">
                  Stage-2
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-80px" }}
      >
        <div class="row w-75 mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100 text-center">
                <img
                  src={img4}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "80px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={img5}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <img
                  src={img6}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={img7}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-35px", marginBottom: "20px" }}
      >
        <div class="row w-75  mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100">
                <input
                  class="mb-5"
                  type="radio"
                  name="flexRadioDefault"
                  checked={formData === "stage-3"}
                  onClick={() => setFormData("stage-3")}
                ></input>
                &nbsp;
                <label class="form-check-label mt-1" for="flexRadioDefault1">
                  Stage-3
                </label>
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <input
                  class="mb-5"
                  type="radio"
                  name="flexRadioDefault"
                  checked={formData === "stage-4"}
                  onClick={() => setFormData("stage-4")}
                ></input>
                &nbsp;
                <label class="form-check-label mt-1" for="flexRadioDefault1">
                  Stage-4
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-80px" }}
      >
        <div class="row w-75 mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100 text-center">
                <img
                  src={img8}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={img9}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <img
                  src={img10}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={img11}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-35px", marginBottom: "20px" }}
      >
        <div class="row w-75  mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100">
                <input
                  class="mb-5"
                  type="radio"
                  name="flexRadioDefault"
                  checked={formData === "stage-5"}
                  onClick={() => setFormData("stage-5")}
                ></input>
                &nbsp;
                <label class="form-check-label mt-1" for="flexRadioDefault1">
                  Stage-5
                </label>
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <input
                  class="mb-5"
                  type="radio"
                  name="flexRadioDefault"
                  checked={formData === "stage-6"}
                  onClick={() => setFormData("stage-6")}
                ></input>
                &nbsp;
                <label class="form-check-label mt-1" for="flexRadioDefault1">
                  Stage-6
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-80px" }}
      >
        <div class="row w-75 mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100 text-center">
                <img
                  src={img12}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={img13}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <img
                  src={img14}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
                <img
                  src={img15}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{
                    height: "70px",
                    width: "70px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid d-flex justify-content-center"
        style={{ marginTop: "-35px" }}
      >
        <div class="row w-75  mt-5">
          <div class="col-md-12">
            <div
              class="btn-group d-flex justify-content-evenly d-grid gap-5"
              style={{ height: "70px" }}
            >
              <div className="caption d-flex justify-content-center w-100">
                <input
                  class="mb-5"
                  type="radio"
                  name="flexRadioDefault"
                  checked={formData === "coin size patch"}
                  onClick={() => setFormData("coin size patch")}
                ></input>
                &nbsp;
                <label class="form-check-label mt-1" for="flexRadioDefault1">
                  Coin Size Patch
                </label>
              </div>
              <div className="caption d-flex justify-content-center w-100">
                <input
                  class="mb-5"
                  type="radio"
                  name="flexRadioDefault"
                  checked={formData === "heavy hair fall"}
                  onClick={() => setFormData("heavy hair fall")}
                ></input>
                &nbsp;
                <label class="form-check-label mt-1" for="flexRadioDefault1">
                  Heavy Hair Fall
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Looklike;
