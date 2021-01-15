import { useState } from "react";
import "./Reviews.css";
import ReviewCard from '../ReviewCard/ReviewCard'
import ReviewForm from '../ReviewForm/ReviewForm'
import shawnTaco from '../assets/shawn-taco.jpg'
import letaTaco from '../assets/leta-taco.jpg'
import willTaco from '../assets/will-taco.jpg'

function Reviews() {
  const [reviews, setReview] = useState([
    {
      id: 1,
      name: "Will Mitchell",
      review: "Tacos are absolutely to die for!",
      image: willTaco
    },
    {
      id: 2,
      name: "Leta Keane",
      review: "Tacos are amazeballs. Staff is super friendly too.",
      image: letaTaco
    },
    {
      id: 3,
      name: "Shawn Truesdale",
      review: "Wow.",
      image: shawnTaco,
    },
  ]);

  const reviewCards = reviews.map(review => {
    return(
        <ReviewCard 
        id={review.id}
        key={review.id}
        name={review.name}
        review={review.review}
        image={review.image}
        />
    )
})

  return(
    <section className="main">
      <h1>Customer Reviews</h1>
      <section className="reviews-container">
        { reviewCards }
      </section>
      <section className="form-container">
        <h2 className="review-title">Taco bout your experience!</h2>
        <ReviewForm reviews={reviews} setReview={setReview}/>
      </section>
    </section>
  )
}

export default Reviews;
