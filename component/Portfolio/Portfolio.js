import React from "react";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  return (
    <>
      <div className="Portfolio container">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className="heading text-center ">
              <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
              <h1>My Portfolio</h1>
            </div>

            <div className="content grid">
              {Portfolio_data.map((value, index) => {
                return (
                  <Card
                    key={index}
                    image={value.image}
                    category={value.category}
                    totalLike={value.totalLike}
                    title={value.title}
                  />
                );
              })}

              {/*<div className='box btn_shadow '>
              <div className='img'>
                  <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Development</span>
                  <label>
                    <i className='far fa-heart'></i> 360
                  </label>
              </div>
              <div className='title'>
                  <h2>Mobile app landing design & Services</h2>
                <a href='' className='arrow'>
                  <i className='fas fa-arrow-right'></i>
                </a>
              </div>
            </div>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;