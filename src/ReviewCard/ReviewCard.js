import React from 'react';
import "./ReviewCard.css"

const ReviewCard = ({id, key, name, review, image}) => {
  return(
    <section className="card">
        <img src={image} alt="No Image Submitted"/>
        <p>{review}</p>
        <p>From: {name}</p>
    </section>
    )
}

export default ReviewCard;