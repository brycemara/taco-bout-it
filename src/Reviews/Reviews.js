import { useState } from "react";
import "./Reviews.css";
import ReviewCard from '../ReviewCard/ReviewCard'

function Reviews() {
  const [reviews, setReview] = useState([
    {
      id: 1,
      name: "Will Mitchell",
      review: "Tacos are absolutely to die for!",
      image: "https://www.breachbangclear.com/wp-content/uploads/2016/04/tacos-1024x694.jpg",
    },
    {
      id: 2,
      name: "Leta Keane",
      review: "Tacos are amazeballs. Staff is super friendly too.",
      image: "https://farm4.staticflickr.com/3273/3033645312_9786714722.jpg"
    },
    {
      id: 3,
      name: "Shawn Truesdale",
      review: "Wow.",
      image: "",
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
    <section>
      <h1>Reviews</h1>
      <section className="reviews-container">
        { reviewCards }
      </section>
    </section>
  )
}

export default Reviews;
