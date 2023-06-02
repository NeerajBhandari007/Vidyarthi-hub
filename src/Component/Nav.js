import React, { useState } from "react";
import stu from "./get.jpg";

function Nav() {
  const [show, setshow] = useState(true);
  return (
    <>
      <div className="mainn">
        <h1 className="title">
          <a href="/">
            Vidyarthi<i className=" logom fa-solid fa-book-open-reader"></i>Hub
          </a>
          <a className=" line btn btn-primarybg-white" role="button">
            <i
              className=" plus fa-solid fa-bars"
              onClick={() => {
                setshow(!show);
              }}
            ></i>
          </a>
          {/* <button className="line">
            <i
              className=" plus fa-solid fa-bars"
              onClick={() => {
                setshow(!show);
              }}
            ></i>
          </button> */}
        </h1>
        {show && (
          <div className="smallt">
            <p className="p">
              <a href="/">Home</a>
            </p>
            <p className="p" href="/NotAvailable">
              <a href="/NotAvailable">Subject</a>
            </p>
            <p className="p">
              <a href="/nptel">Nptel</a>
            </p>
            <p className="p">
              <a href="/NotAvailable">Semester</a>
            </p>
          </div>
        )}
      </div>
      <div className="f1">
        <div className="gesture">
          <p className="sma">
            Education is one thing no one can take away from you . . . . .
          </p>
          <button className="hlobt">Get Started</button>
        </div>
        <div className="imgg">
          <img className="img1" alt="img" src={stu} />
        </div>
      </div>
    </>
  );
}

export default Nav;
