import React from "react";
import { ListGroup } from "react-bootstrap";
import { useCrypto } from "../contexts/CryptoContext";
import CryptoCard from "./CryptoCard";

function CryptoList() {
  const { cryptoList } = useCrypto();
  // console.log(cryptoList);
  return (
    <div className="w-75">
      <ListGroup as="ul">
        <ListGroup.Item className="d-flex flex-row justify-content-between">
          <div className="d-flex align-items-center pe-4">
            <div className="me-2"> # </div>
            <div className="me-3" style={{ width: "2vw" }} />
            <div className="me-0 fs-5 fw-bold" style={{ width: "20vw" }}>
              Coin
            </div>
            <div>
              <div className="fs-5 fw-bold">Current Price</div>
            </div>
          </div>

          <div
            className="d-flex justify-content-evenly align-items-center fs-5 fw-bold"
            style={{ width: "30vw" }}
          >
            <div className="ms-3">24h</div>
            <div>Total Market Cap</div>
          </div>
        </ListGroup.Item>
        {cryptoList.map((coin) => (
          <ListGroup.Item key={coin.id} as="li">
            <CryptoCard coin={coin} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default CryptoList;
