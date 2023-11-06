import React from "react";
function Footer() {
  const year = new Date().getFullYear();
  return <p>copyright {year}</p>;
}
export default Footer;
