import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="container hero my-5">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6">
          <h3>WELCOME TO MY WORLD</h3>
          <h1 className="text-blue">
            Hi, I’m <span>Winifred Liam</span>
          </h1>
          <h2>
            <span>
              <Typewriter
                words={[
                  " Author.",
                  "Upwork Freelancer",
                  "Freelance Ghost Writer.",
                  "Virtual Assistant.",
                  "IT Support Specialist",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={200}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="bio">
            Winifred Liam is an avid reader, and she wears many hats most times
            an Indie Author of three published books on Amazon and bambooks.
            Ghostwriter, Virtual assistant, and IT support specialists. A
            freelancer on Upwork and one who takes this blog as her safe space.
            A place to rant, write and share stories hoping it reaches out to
            someone in need of it.
          </p>

          <div className="hero_btn">
            <h4>COME SAY HELLO </h4>
            <div className="button_container">
              <a
                href="https://www.facebook.com/winnifred.liam"
                target="_blank"
                className="btn_shadown"
                rel="noreferrer"
              >
                <button className="btn_shadow">
                  <i className="fab fa-facebook-f"></i>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/winifred-liam/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn_shadow">
                  <i className="fab fa-instagram"></i>
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/winifred-liam/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn_shadow">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </a>
              <a href="https://medium.com/@winifredliam" target="_blank" rel="noreferrer">
                <button className="btn_shadow">
                  <i className="fab fa-medium"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="col-md-6">
          <Image src={winifred} className="img-fluid winnie_png" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
