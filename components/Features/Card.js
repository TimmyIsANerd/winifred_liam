import React from "react"

const Card = (props) => {
  return (
    <>
      <div className={`${props.color} box btn_shadow col-md-3 col-xl-3 col-sm-12 col-lg-3 m-1`}>
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

export default Card;