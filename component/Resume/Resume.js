import React from "react";
import ResumeApi from "./ResumeApi";
import Card from "./Card";

const Resume = () => {
  return (
    <>
      <div className="Resume container" id="resume">
        <div className="row">
          <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-xs-12">
            <div className="heading text-center">
              <h4>7+ YEARS OF EXPERIENCE</h4>
              <h1>My Resume</h1>
              <a href="../component/Portfolio/Portfolio/01_WINIFRED_MSOOTER_LIAM_CV.pdf" target="_blank" class="btn btn-sm btn_shadow">Download CV </a> 
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-xs-12">
                  <div className="heading">
                    <h4>2009-2018</h4>
                    <h1>Education Quality</h1>
                  </div>

                  <div className="col-12">
                    {ResumeApi.map((val, id) => {
                      if (val.category === "education") {
                        return (
                          <Card
                            key={id}
                            title={val.title}
                            year={val.year}
                            rate={val.rate}
                            desc={val.desc}
                          />
                        );
                      }
                    })}

                    {/*<div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Personal Portfolio April Fools</h2>
                      <span>University of DVI (1997 - 2001)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>4.30/5</button>
                    </div>
                  </div>
                  <hr />
                  <p> The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.</p>
                </div>*/}
                  </div>
                </div>
                <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-xs-12">
                  <div className="heading">
                    <h4>2018-Present</h4>
                    <h1>Job Experience</h1>
                  </div>

                  <div className="col">
                    {ResumeApi.map((val, index) => {
                      if (val.category === "experience") {
                        return (
                          <Card
                            key={index}
                            title={val.title}
                            year={val.year}
                            rate={val.rate}
                            desc={val.desc}
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
