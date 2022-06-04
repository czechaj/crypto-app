import React from "react";
import { Card } from "react-bootstrap";
function CryptoCard({ coin }) {
  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="d-flex align-items-center">
        <Card.Subtitle className="me-2"> {coin.market_cap_rank} </Card.Subtitle>
        <Card.Img
          src={coin.image}
          className="ms-5 me-3"
          style={{ width: "1vw" }}
        />
        <Card.Subtitle
          className="me-2 d-flex align-items-center"
          style={{ width: "20vw" }}
        >
          <Card.Subtitle className="text-nowrap fs-5 me-2">
            {coin.name}
          </Card.Subtitle>
          <Card.Subtitle className="text-muted fs-6">
            {coin.symbol.toUpperCase()}
          </Card.Subtitle>
        </Card.Subtitle>
        <Card.Title>
          <Card.Subtitle className="text-1 fw-normal">
            ${coin.current_price}
          </Card.Subtitle>
        </Card.Title>
      </div>
      <div>
        <Card.Title
          className="me-2 d-flex justify-content-evenly align-items-center"
          style={{ width: "30vw" }}
        >
          <Card.Subtitle
            className={`fs-6 fw-bold ${
              coin.price_change_percentage_24h > 0
                ? "text-success"
                : "text-danger"
            }`}
            // style={{ width: "13vw" }}
          >
            {coin.price_change_percentage_24h.toString().substring(0, 4)}%
          </Card.Subtitle>

          <Card.Subtitle className="text-1 fw-normal">
            ${coin.market_cap}
          </Card.Subtitle>
        </Card.Title>
      </div>
    </div>
  );
}

export default CryptoCard;
