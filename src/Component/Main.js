import React from "react";
import np from"./download.png";
import np1 from"./download (1).png";
import np2 from"./dd.jpg";
import np3 from"./ddd.jpg";
import Box from "./Box";
function Main() {
  return (
    <>
      <div className="container text-center my-5">
        <div className="row fs-6 ">
          <div className="col-md-6 my-5 d-flex justify-content-center">
            <Box img={np} title="NPTEL Courses" url="/nptel" />
          </div>
          <div className="col-md-6 my-5 d-flex justify-content-center">
            <Box img={np1} title="Semester Material" url="/NotAvailable" />
          </div>
          <div className="col-md-6 my-5 d-flex justify-content-center">
            <Box img={np2} title="Year Wise Material" url="/NotAvailable" />
          </div>
          <div className="col-md-6 my-5 d-flex justify-content-center">
            <Box img={np3} title="CourseEra Subjects" url="/NotAvailable" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;