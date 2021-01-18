import { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = ({ reviews, setReview }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    if (name === '' || description === '') return;
    
    event.preventDefault();

    const newReview = {
      id: Date.now(),
      name: name,
      review: description,
      image: image,
    };

    setReview([...reviews, newReview]);

    clearInputs();
  };

  const clearInputs = () => {
    setName("");
    setDescription("");
    setImage("");
  };

  return (
    <form className="form">
      <label htmlFor="name">Name: </label>

      <input
        name="name"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="description">Description: </label>

      <input
        name="description"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      />

      <label htmlFor="image">Image: </label>

      <input
        name="image"
        placeholder="Image (optional)"
        value={image}
        onChange={(event) => setImage(event.target.value)}

      />

      <button className="review-button" onClick={handleSubmit}>Add Review</button>
    </form>
  );
};

export default ReviewForm;
