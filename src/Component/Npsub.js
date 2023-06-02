import React from "react";
import Box from "./Box";
import np from "./im.jpg";
import np1 from "./im.jpg";
import log from "./logo.png";
function Npsub() {
  return (
    <>
      <div >
        <h1 className="hm">
          <img alt="logo" src={log} className="st"/>
        </h1>
        <h4>Courses</h4>
        <div className="container text-center my-5">
          <div className="row fs-6 ">
            <div className="col-md-6 my-5 d-flex justify-content-center">
              <Box img={np} url="./ans" title="Data Mining" />
            </div>
            <div className="col-md-6 my-5 d-flex justify-content-center">
              <Box img={np1} url="/NotAvailable" title="Probability And Statistics" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Npsub;
