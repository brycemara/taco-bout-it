import React from 'react';
import PropTypes from 'prop-types';
import "./ReviewCard.css"

const ReviewCard = ({id, name, review, image}) => {
  return(
    <section className="card" test-id={id}>
        <img className="review-img" src={image} alt="No Image was submitted"/>
        <p>{review}</p>
        <p>From: {name}</p>
    </section>
    )
}

export default ReviewCard;

ReviewCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
