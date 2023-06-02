import React from "react";

function Footer() {
  return (
    <>
      <div className="foot">
        <div className="icon">
          <a href="/" rel="link" target="_blank">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a href="/" rel="link" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="/" rel="link" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/" rel="link" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="fol">
          {/* <p className="p1">Subject</p>
          <p className="p1">Nptel</p>
          <p className="p1">Semester</p> */}
          <p className="p1"><a href="/" className="p11" rel="link">About</a></p>
        </div>
        <h6>CopyRight @2023</h6>
      </div>
    </>
  );
}
export default Footer;
