import { Card, Col, Row } from "antd";
import React from "react";
import one from "./img/show/1.jpg";
import two from "./img/show/2.jpg";
import three from "./img/show/3.jpg";
import four from "./img/show/4.jpg";
import five from "./img/show/5.jpg";
import six from "./img/show/6.jpg";
import seven from "./img/show/7.jpg";
import eight from "./img/show/8.jpg";
import nine from "./img/show/9.jpg";
import ten from "./img/show/10.jpg";
import eleven from "./img/show/11.jpg";
import twel from "./img/show/12.jpg";
import thirteen from "./img/show/13.jpg";
import fourteen from "./img/show/14.jpg";
import fifteem from "./img/show/15.jpg";
import sixteen from "./img/show/16.jpg";
import seventeen from "./img/show/17.jpg";
import eighteen from "./img/show/18.jpg";
import ninteen from "./img/show/19.jpg";
import twenty from "./img/show/20.jpg";
import twenty1 from "./img/show/21.jpg";
import twenty2 from "./img/show/22.jpg";
import twenty3 from "./img/show/23.jpg";
import twenty4 from "./img/show/24.jpg";
import twenty5 from "./img/show/25.jpg";
import twenty6 from "./img/show/26.jpg";
import twenty7 from "./img/show/27.jpg";
import twenty8 from "./img/show/28.jpg";
import twenty9 from "./img/show/29.jpg";
import thirty from "./img/show/30.jpg";
import { WhatsappIcon } from "react-share";

const { Meta } = Card;

const OurResults = () => {
  const resultDatas = [
    {
      title: "Grade 5 baaldness",
      subTitle: "I-PRF",
      description: "Results after 6 months",
      image: one,
    },
    {
      title: "Grade 2 baaldness (Ludwig)",
      subTitle: "I-PRF",
      description: "Results after 4 months",
      image: two,
    },
    {
      title: "Grade 4 baaldness",
      subTitle: "GFC",
      description: "Results after 4 months",
      image: three,
    },
    {
      title: "Grade 2 baaldness (Ludwig)",
      subTitle: "GFC",
      description: "Results after 5 months",
      image: four,
    },
    {
      title: "Grade 3 baaldness (Ludwig)",
      subTitle: "I-PRF",
      description: "Results after 6 months",
      image: five,
    },
    {
      title: "Grade 4 baaldness",
      subTitle: "GFC",
      description: "Results after 4 months",
      image: six,
    },
    {
      title: "Grade 3 baaldness",
      subTitle: "I-PRF",
      description: "Results after 4 months",
      image: seven,
    },
    {
      title: "Grade 1 baaldness (Ludwig)",
      subTitle: "GFC",
      description: "Results after 3 months",
      image: eight,
    },
    {
      title: "Grade 4 baaldness",
      subTitle: "GFC",
      description: "Results after 5 months",
      image: nine,
    },
    {
      title: "Grade 3 baaldness (Ludwig)",
      subTitle: "I-PRF",
      description: "Results after 4 months",
      image: ten,
    },
    {
      title: "Grade 2 baaldness (Ludwig)",
      subTitle: "GFC",
      description: "Results after 5 months",
      image: eleven,
    },
    {
      title: "Grade 4 baaldness",
      subTitle: "GFC",
      description: "Results after 3 months",
      image: twel,
    },
    {
      title: "Grade 2 baaldness (Ludwig)",
      subTitle: "I-PRF",
      description: "Results after 4 months",
      image: thirteen,
    },
    {
      title: "Grade 3 baaldness (Vertex)",
      subTitle: "I-PRF",
      description: "Results after 3 months",
      image: fourteen,
    },
    {
      title: "Grade 2 baaldness (Ludwig)",
      subTitle: "I-PRF",
      description: "Results after 4 months",
      image: fifteem,
    },
    {
      title: "Grade 4 baaldness",
      subTitle: "I-PRF",
      description: "Results after 6 months",
      image: sixteen,
    },
    {
      title: "Grade 3 baaldness (Ludwig)",
      subTitle: "GFC",
      description: "Results after 4 months",
      image: seventeen,
    },
    {
      title: "Grade 5 baaldness",
      subTitle: "GFC",
      description: "Results after 6 months",
      image: eighteen,
    },
    {
      title: "Grade 5 baaldness",
      subTitle: "I-PRF",
      description: "Results after 4 months",
      image: ninteen,
    },
    {
      title: "Grade 3 baaldness (Ludwig)",
      subTitle: "GFC",
      description: "Results after 4 months",
      image: twenty,
    },
    {
      title: "Grade 3 baaldness (Ludwig)",
      subTitle: "I-PRF",
      description: "Results after 5 months",
      image: twenty1,
    },
    {
      title: "Grade 2 baaldness (Ludwig)",
      subTitle: "I-PRF",
      description: "Results after 3 months",
      image: twenty2,
    },
    {
      title: "Grade 4 baaldness",
      subTitle: "GFC",
      description: "Results after 5 months",
      image: twenty3,
    },
    {
      title: "Grade 5 baaldness",
      subTitle: "GFC",
      description: "Results after 6 months",
      image: twenty4,
    },
    {
      title: "Grade 6 baaldness",
      subTitle: "I-PRF",
      description: "Results after 4 months",
      image: twenty5,
    },
    {
      title: "Grade 3 baaldness (Vertex)",
      subTitle: "GFC",
      description: "Results after 3 months",
      image: twenty6,
    },
    {
      title: "Grade 3 baaldness (Ludwig)",
      subTitle: "I-PRF",
      description: "Results after 4 months",
      image: twenty7,
    },
    {
      title: "Grade 2 baaldness (Ludwig)",
      subTitle: "GFC",
      description: "Results after 3 months",
      image: twenty8,
    },
    {
      title: "Grade 4 baaldness (Vertex)",
      subTitle: "I-PRF",
      description: "Results after 5 months",
      image: twenty9,
    },
    {
      title: "Grade 5 baaldness",
      subTitle: "GFC",
      description: "Results after 6 months",
      image: thirty,
    },
  ];

  const countryCode = "91";
  const phoneNumber = "6380388803";
  const message =
    "Hi Dr.Prabhakar. I would like to know more about the hair transplantation!";

  const sendMessage = () => {
    const url = `https://api.whatsapp.com/send?phone=${countryCode}${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      <center>
        <h2 style={{ marginTop: 20, marginBottom: 30 }}>Our Results</h2>
      </center>
      <div className="container-fluid">
        <Row gutter={32} style={{ justifyContent: "center" }}>
          {resultDatas.map((itm, i) => (
            <Col key={i} style={{ marginBottom: 30 }}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={itm.image} />}
              >
                <Meta
                  title={<div style={{ textAlign: "center" }}>{itm.title}</div>}
                  description={
                    <div style={{ textAlign: "center" }}>{itm.subTitle}</div>
                  }
                />
                <div style={{ marginTop: 10, textAlign: "center" }}>
                  {itm.description}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div style={{ position: "fixed", bottom: 25, right: 25 }}>
        <WhatsappIcon
          size={45}
          round
          style={{ cursor: "pointer" }}
          onClick={sendMessage}
        />
      </div>
    </div>
  );
};

export default OurResults;
