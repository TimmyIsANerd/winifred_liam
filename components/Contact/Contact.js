import React, { useState } from "react";
import contact1 from "./contact1.png";
import Image from "next/image";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    );
  };
  return (
    <>
      <div className="Contact container top" id="contact">
        <div className="row">
          <div className="col-md-12">
            <div className="heading text-center">
              <h4>CONTACT</h4>
              <h1>Say Hello</h1>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 col-xl-6 col-lg-12 my-2">
                  <div className="box box_shodow p-2">
                    <div className="details">
                      <h1>Winifred Liam</h1>
                      {/* <p>Chief Operating Officer</p> */}
                      <p>
                        I am available for Freelance Work. Connect with Me via
                        Whatsapp or send me an Email.
                      </p>{" "}
                      <br />
                      <p>
                        Phone:{" "}
                        <a href="tel:+2347065481408">+234 706 548 1408</a>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:msooterwinnie@gmail.com">
                          msooterwinnie@gmail.com
                        </a>
                      </p>{" "}
                      <br />
                      <div className="my-3">
                        <a
                          href="./01_WINIFRED_MSOOTER_LIAM_CV.pdf"
                          className="btn btn-sm btn_shadow"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Download CV{" "}
                        </a>
                      </div>
                      <span>FIND ME ON</span>
                      <div className="button button_container">
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
                        <a
                          href="https://medium.com/@winifredliam"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="btn_shadow">
                            <i className="fab fa-medium"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xs-12 col-xl-6 col-lg-12 my-2">
                  <div className="box_shodow p-2">
                    <form onSubmit={formSubmit}>
                      <div className="col">
                        <div className="input">
                          <span>YOUR NAME</span>
                          <input
                            type="text"
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                          />
                        </div>
                        <div className="input">
                          <span>PHONE NUMBER </span>
                          <input
                            type="number"
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                          />
                        </div>
                      </div>
                      <div className="input">
                        <span>EMAIL </span>
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={InputEvent}
                        />
                      </div>
                      <div className="input">
                        <span>SUBJECT </span>
                        <input
                          type="text"
                          name="subject"
                          value={data.subject}
                          onChange={InputEvent}
                        />
                      </div>
                      <div className="input">
                        <span>YOUR MESSAGE </span>
                        <textarea
                          cols="30"
                          rows="10"
                          name="message"
                          value={data.message}
                          onChange={InputEvent}
                        ></textarea>
                      </div>
                      <button className="btn_shadow">
                        SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                      </button>
                    </form>
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

export default Contact;
