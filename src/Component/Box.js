import React from "react";

function Box(props) {
  return (
    <>
      <div>
        <div className="card p-4" >
          <img src={props.img} className="card-img-top" style={{height:"200px"}}alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <a href={props.url} className="btn btn11 px-5 btn-primary">
             Go
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Box;
