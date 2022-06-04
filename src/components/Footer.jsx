import React from "react";

function Footer() {
  return (
    <footer
      className="m-3 fs-6"
      style={{ position: "fixed", bottom: 0, left: 0 }}
    >
      made by{" "}
      <a
        href="http://github.com/czechaj"
        target={"_blank"}
        rel="noreferrer"
        className="text-decoration-none text-dark fw-bold "
      >
        czechaj
      </a>
    </footer>
  );
}

export default Footer;
