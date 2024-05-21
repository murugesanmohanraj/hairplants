import React from "react";
import { Card, Col, Row } from "antd";
const { Meta } = Card;
const Cards = ({ cardsData }) => (
  <div>
    <Row gutter={32} style={{ margin: 0 }}>
      {cardsData.map((itm, i) => (
        <Col lg={8} md={8} sm={24} xs={24} key={i} className="mb-4">
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src={itm.img}
                style={{ height: 200, objectFit: "cover" }}
              />
            }
          >
            <Meta
              title={<div>{itm.desc1} transplanted</div>}
              description={
                <div
                  style={{ color: "black", fontSize: 16, fontWeight: "400" }}
                >
                  {itm.title}
                </div>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
export default Cards;
