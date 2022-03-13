import React from "react";
import data from "./Features-Api";
import Card from "./Card";

const Features = () => {
  return (
    <>
      <div className="container features">
        <div className="row">
          <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12">
            <div className="heading">
              <h4>My Skill Set</h4>
              <h1>What I Do</h1>
            </div>

            <div className="content grid">
              {data.map((val, index) => {
                return (
                  <Card
                    key={index}
                    image={val.image}
                    title={val.title}
                    desc={val.desc}
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
    </>
  );
};

export default Features;
