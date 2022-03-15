import React, { useState } from "react";
import Image from "next/image";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // if (modal) {
  //   document.body.classList.add("active-modal")
  // } else {
  //   document.body.classList.remove("active-modal")
  // }
  return (
    <div className="box btn_download col-md-3 col-xl-3 m-1 col-sm-12 col-xs-12">
      <div className="">
        <div className="img">
          <img
            src={props.image}
            alt={props.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="category d_flex">
          <span>{props.category}</span>
          {/* <label>
            <i className="far fa-star"></i> 
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </label> */}
        </div>
        <div className="title">
          <h2>{props.title}</h2>
          <a
            href={props.downloadLink}
            className="btn btn_download"
            target="_blank"
            rel="noreferrer"
          >
            Download <span className="fas fa-download"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
