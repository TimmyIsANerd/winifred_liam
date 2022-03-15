import React, { useEffect, useState } from "react";
import Carousel from "react-simply-carousel";
import TestimonialApi from "./TestimonialApi";

const Testimonial = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);




  return (
    <>
      <div className="Testimonial container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading text-center">
              <h4>WHAT CLIENTS SAY</h4>
              <h1>Testimonial</h1>
            </div>

            <Carousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={() => setActiveSlideIndex(activeSlideIndex)}
              itemsToShow={1}
              itemsToScroll={1}
            >
              <div style={{ width: 300, height: 300 }} className="btn-shadow d-flex justify-content-center align-items-center flex-column text-center">
                <p>Great Experience. She took the delicate topic of online dating out of a woman's perspective and developed it to a practical, reliable very easy to read guide. Thank you. You are definitely on my short list for upcoming projects</p>
                <p className="subtext text-blue text-bold">KurtGassner </p>
                <p><span className="text-bold">Fiver</span> 5<span className="fas fa-star"></span></p>
              </div>
              <div style={{ width: 300, height: 300 }} className="btn-shadow d-flex justify-content-center align-items-center flex-column text-center">
                <p>Winnie is a very hard working individual. I enjoyed working with her and she has a positive attitude and great to deal with.</p>
                <p className="subtext text-blue text-bold">Leigh </p>
                <p><span className="text-bold">Upwork</span> 5<span className="fas fa-star"></span></p>
              </div>
              <div style={{ width: 300, height: 300 }} className="btn-shadow d-flex justify-content-center align-items-center flex-column text-center">
                <p>It was very nice working with Winifred.</p>
                <p className="subtext text-blue text-bold">Ismail RD </p>
                <p><span className="text-bold">Upwork</span> 5<span className="fas fa-star"></span></p>
              </div>
            </Carousel>
            <div className="slide">
              <div className="slide_button my-3 d-flex justify-content-center">
                <button
                  className="btn_shadow prev_btn mx-1"
                  onClick={() => setActiveSlideIndex(-1)}
                >
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button
                  className="btn_shadow next_btn mx-1"
                  onClick={() => setActiveSlideIndex(+1)}
                >
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
