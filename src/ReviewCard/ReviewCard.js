import React from 'react';
import "./ReviewCard.css"

const ReviewCard = ({id, key, name, review, image}) => {
  return(
    <section className="card">
        <img className="review-img" src={image} alt="No Image Submitted"/>
        <p>{review}</p>
        <p>From: {name}</p>
    </section>
    )
}

export default ReviewCard;