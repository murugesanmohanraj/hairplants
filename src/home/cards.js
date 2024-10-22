import React, { useEffect } from "react";
import { Image, Col, Row } from "antd";
const Cards = ({ cardsData }) => {
  useEffect(() => {
    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);
  return (
    <div>
      <Row gutter={32} style={{ margin: 0 }}>
        {cardsData.map((itm, i) => (
          <Col lg={8} md={8} sm={24} xs={24} key={i} className="mb-4">
            <Image
              src={itm.img}
              height={250}
              width={"100%"}
              style={{
                objectFit: "contain",
                userSelect: "none",
                pointerEvents: "none",
              }}
              onContextMenu={(e) => e.preventDefault()}
            ></Image>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Cards;
