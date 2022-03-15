import React from "react";
import data from "./Features-Api";
import Card from "./Card";
import Image from "next/image";
import winnie from "./Winnie.png"

const Features = () => {
  return (
    <div className="container-fluid features py-5" id="skills">
      <div className="row">
        <div className="col-md-12 col-xl-6 col-lg-6 col-sm-12 py-2">
          <div className="heading text-center">
            <h4>My Skill Set</h4>
            <h1>What I Do</h1>
            <Image src={winnie} className="img-fluid rounded" />
          </div>
        </div>
        <div className="col-md-12 col-xl-6 col-lg-6 col-sm-12 col-xs-12 py-2">
          <div className="row justify-content-center">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                  url={val.url}
                  color={val.color}
                />
              );
            })}

            {/*<div className='box btn_shadow'>
              <img src='https://img.icons8.com/glyph-neue/64/000000/polyline.png' alt='' />
              <h2>Personal Portfolio April</h2>
              <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.</p>
              <a href=''>
                <i className='fas fa-arrow-right'></i>
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
