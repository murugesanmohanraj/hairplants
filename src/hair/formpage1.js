import React, { useEffect, useState } from "react";
import img from "../home/img/logo.png";
import Nameinfo from "./name";
import Looklike from "./looklike";
import Goal from "./goal";
import NotFoundPage from "./genetic";
import "./form.css";
import { useNavigate } from "react-router-dom";
import AuthAxios from "../intreceptor/authAxios";
import { ToastContainer, toast } from "react-toastify";
import { Spin } from "antd";

function FormPage1() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState("");
  const [faceShape, setFaceShape] = useState("");
  const [aboutYou, setAboutYou] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
  });
  const [spinning, setSpinning] = React.useState(false);

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const FormTitles = ["Face shape", "Hair loss stage", "About you"];

  const notify = (x, msg) => {
    if (x) {
      toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Goal setFaceShape={setFaceShape} faceShape={faceShape} />;
      case 1:
        return <Looklike formData={formData} setFormData={setFormData} />;
      case 2:
        return <Nameinfo aboutYou={aboutYou} setAboutYou={setAboutYou} />;
      default:
        return <NotFoundPage />;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  const submitData = () => {
    const apiDatas = {
      name: aboutYou.name,
      email: aboutYou.email,
      mobile_number: aboutYou.number,
      age: aboutYou.age,
      face_shape: faceShape,
      hair_loss_stage: formData,
    };
    setSpinning(true);
    AuthAxios.post("enquiry/store", apiDatas)
      .then((res) => {
        if (res.data?.success === 200) {
          setSpinning(false);
          localStorage.setItem("userId", res.data?.data?.id);
          window.location.href = "/testHair";
        } else {
          setSpinning(false);
          if (res.data?.error?.email[0]) {
            notify(false, res.data?.error?.email[0]);
          }
          if (res.data?.error?.mobile_number[0]) {
            notify(false, res.data?.error?.mobile_number[0]);
          }
        }
      })
      .catch((err) => {
        setSpinning(false);
        notify(false, err.message);
      });
  };

  return (
    <>
      <div id="background" style={{ width: "100%", minHeight: screenHeight }}>
        <div className="bg2" style={{ width: "100%", minHeight: screenHeight }}>
          <nav
            class="navbar navbar-expand-lg navbar-light pl-4 pr-4"
            style={{ backgroundColor: "white" }}
          >
            <div class="d-flex justify-content-between align-items-center w-100">
              <img
                src={img}
                height={60}
                width={200}
                alt="test"
                style={{ height: 75, objectFit: "contain" }}
                onClick={() => navigate("/")}
              ></img>
              <h5
                style={{
                  color: "black",
                }}
                className="laptop"
              >
                This hair test is co-created with doctors.
              </h5>
            </div>
          </nav>

          <div className="form">
            <div className="form-container shadow-none">
              <div
                className="halfWidth"
                style={{ color: "black", margin: "auto" }}
              >
                <div className="d-flex justify-content-between mb-4">
                  {FormTitles.map((itm) => (
                    <div
                      key={itm}
                      className={`topTabs ${
                        itm === FormTitles[page] ? "topTabs1" : "topTabs2"
                      }`}
                      style={{ padding: "0px 6px" }}
                    >
                      {itm}
                    </div>
                  ))}
                  <div
                    className={`topTabs topTabs2`}
                    style={{ padding: "0px 6px" }}
                  >
                    Graft calculator
                  </div>
                </div>
              </div>
              <div
                className="progressbar halfWidth"
                style={{ color: "black", margin: "auto" }}
              >
                <div
                  style={{
                    width: `${Math.round(
                      (page + 1) * (100 / FormTitles.length)
                    )}%`,
                  }}
                >
                  <br />
                  {Math.round((page + 1) * (100 / FormTitles.length))}%
                </div>
              </div>
              <div className="body mt-5">{PageDisplay()}</div>
              <div className="footer">
                <button
                  onClick={() => {
                    if (page !== 0) {
                      setPage((currPage) => currPage - 1);
                    }
                  }}
                  style={{
                    cursor: page === 0 && "no-drop",
                    backgroundColor: page === 0 && "darkgray",
                  }}
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      submitData();
                    } else {
                      if (page <= 3) {
                        if (page === 0) {
                          if (faceShape !== "") {
                            setPage((currPage) => currPage + 1);
                          }
                        } else if (page === 1) {
                          if (formData !== "") {
                            setPage((currPage) => currPage + 1);
                          }
                        } else if (page === 2) {
                          if (
                            aboutYou.name !== "" &&
                            aboutYou.age !== "" &&
                            aboutYou.number !== "" &&
                            aboutYou.email !== ""
                          ) {
                            setPage((currPage) => currPage + 1);
                          }
                        }
                      }
                    }
                  }}
                  style={{
                    cursor:
                      page === 0 && faceShape === ""
                        ? "no-drop"
                        : page === 1 && formData === ""
                        ? "no-drop"
                        : page === 2 &&
                          (aboutYou.name === "" ||
                            aboutYou.email === "" ||
                            aboutYou.age === "" ||
                            aboutYou.number === "") &&
                          "no-drop",
                    backgroundColor:
                      page === 0 && faceShape === ""
                        ? "darkgray"
                        : page === 1 && formData === ""
                        ? "darkgray"
                        : page === 2 &&
                          (aboutYou.name === "" ||
                            aboutYou.email === "" ||
                            aboutYou.age === "" ||
                            aboutYou.number === "") &&
                          "darkgray",
                  }}
                >
                  {page === FormTitles.length - 1 ? "Next" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        <Spin spinning={spinning} fullscreen />
      </div>
    </>
  );
}

export default FormPage1;
