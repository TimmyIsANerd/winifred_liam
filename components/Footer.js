import React from "react"
import logo1 from "./pic/f_logo.png"

const Footer = () => {
  const getDate = () =>{
    var year = new Date();
    var year = year.getFullYear();
    return year;
  }
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' />
          </div>
          <p>© {getDate()}. Made with 💖 by Breative.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
