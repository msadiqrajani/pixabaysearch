import React from "react";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "99%"
};

var phantom = {
  display: "block",
  padding: "10px",
  height: "30px",
  width: "99%"
};

function Footer() {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        <h3>
          I have used <a src="https://pixabay.com/">https://pixabay.com</a> API
          to search images
        </h3>
      </div>
    </div>
  );
}

export default Footer;
