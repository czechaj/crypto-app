import React from "react";
import { Form, InputGroup } from "react-bootstrap";
function Searchbar() {
  return (
    <div className="w-25">
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Search by crypto name"
        />
      </InputGroup>
    </div>
  );
}

export default Searchbar;
