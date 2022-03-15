import React from "react"
import NavBar from "../components/Nav/Navbar"
import Header from "../components/Head/Header"
import Features from "../components/Features/Features"
import Home from "../components/Hero/Home"
import Portfolio from "../components/Portfolio/Portfolio"
import Resume from "../components/Resume/Resume"
import Testimonial from "../components/Testimonial/Testimonial"
import Blog from "../components/Blog/Blog"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer"


const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Features />
      <Resume />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
 
export default LandingPage;