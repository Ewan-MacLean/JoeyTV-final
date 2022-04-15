import React, { useState } from "react";
import AgeRecommended from "./AgeRecommended";
import Rating from "./Rating";

function Form(props) {
  const [review, setReview] = useState("");
  const [showId, setShowId] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [rating, setRating] = useState(0);
  const [ages, setAges] = useState([]);
  // const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    //reset for data
    e.preventDefault();
    e.target.reset(); // reset check boxes (very imporant)
    setAges([]);
    setRating("");
    setReview("");

    //Json formatted data to be posted to server
    const userComments = {
      showId: showId,
      userId: userId,
      movieTitle: movieTitle,
      review: review,
      rating: rating,
      ages: ages,
    };

    fetch("http://localhost:8888/usercomments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userComments),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form
        action="/profile"
        method="Post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <Rating
          rating={rating}
          onRating={(rate) => setRating(rate)}
          count={10}
        />
        <p>Rating-{rating}</p>
        <label>
          <h2>Your Comment</h2>
          <textarea
            rows={4}
            cols={50}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <AgeRecommended ages={ages} setAges={setAges} />
        <p>Age(s) Recommended-{ages.toString()}</p>
        <br />
        <input type="submit" value="Submit Review" />
        <input
          type="reset"
          value="Clear Review"
          onClick={() => setReview("") || setRating("") || setAges([])}
        />
      </form>
    </div>
  );
}

export default Form;