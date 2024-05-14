import React from "react";
import img from "../img/hair1.jpg";

function hairfall() {
  return (
    <>
      <div class="container">
        <div class="row ">
          <div
            class="col-lg-12 offset-lg-3 col-md-12 offset-md-2 col-sm-12 offset-sm-1 col-xs-12 text-center"
            style={{ height: "400px", marginLeft: "-5px" }}
          >
            <img
              src={img}
              class="rounded img-fluid rounded-circle"
              alt="..."
              style={{ maxWidth: "100%", height: "100%" }}
            ></img>
          </div>
        </div>
        <div class="row" style={{ smarginLeft: "-250px", marginTop: "20px" }}>
          <div class="col-lg-6 offset-lg-3 col-md-10 offset-md-2 col-sm-10 offset-sm-1 col-12 text-center">
            <input class="" type="radio" name="flexRadioDefault"></input>&nbsp;
            <label class="form-check-label" for="flexRadioDefault1">
              YES
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input class="" type="radio" name="flexRadioDefault"></input>&nbsp;
            <label class="form-check-label" for="flexRadioDefault2">
              NO
            </label>
          </div>
        </div>
      </div>
      &nbsp;
    </>
  );
}

export default hairfall;
