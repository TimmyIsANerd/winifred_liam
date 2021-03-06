import React from "react";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {
  return (
    <>
      <div className="Portfolio container" id="portfolio">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className="heading text-center">
              <h4>TAKE A LOOK AT MY PORTFOLIO</h4>
              <h1>My Recent Work</h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row justify-content-center">
              {Portfolio_data.map((value, index) => {
                return (
                  <Card
                    key={index}
                    image={value.image}
                    category={value.category}
                    totalLike={value.totalLike}
                    title={value.title}
                    downloadLink={value.downloadLink}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
