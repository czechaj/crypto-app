import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="w-100 mb-4">
      <Navbar.Brand className="ms-4" style={{ cursor: "pointer" }}>
        CryptoFinder
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
