import React from "react";
import { Button } from "react-bootstrap";
import { useCrypto } from "../contexts/CryptoContext";
function PageChanger() {
  const { page, setPage } = useCrypto();

  let pages = [];
  for (let i = 1; i < 16; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => (
        <Button
          active={page === p}
          variant="outline-dark"
          key={p}
          onClick={() => setPage(p)}
          className="mt-5"
        >
          {p}
        </Button>
      ))}
    </div>
  );
}

export default PageChanger;
