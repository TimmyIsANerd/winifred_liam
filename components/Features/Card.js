import React from "react"

const Card = (props) => {
  return (
    <>
      <div className={`${props.color} box btn_shadow col-md-4 col-xl-4 col-sm-12 col-lg-4 m-1`}>
        <img src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p className="descriptionText">{props.desc}</p>
        <a href={props.url}>
          <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </>
  )
}

export default Card
