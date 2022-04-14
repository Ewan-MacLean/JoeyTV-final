import React, { useState } from "react";
import { AgeRecommended } from "./AgeRecommended";
import Rating from "./Rating";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { MovieDetails } from "./MovieDetails";
import ReviewList from "./ReviewList";

export const ReviewForm = (props) => {
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
      <MovieDetails />
      <Form
        action="/profile"
        method="Post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <Row>
          <Col md="5">
            <Form.Group controlId="Rating">
              <h2>Your Rating</h2>
              <Rating
                rating={rating}
                onRating={(rate) => setRating(rate)}
                count={10}
              />
              <Form.Label>
                <h5>Rating-{rating}</h5>
              </Form.Label>
            </Form.Group>
          </Col>
          <Col md="7">
            <Form.Group controlId="AgeRecommendation">
              <AgeRecommended ages={ages} setAges={setAges} />
              <Form.Label>
                <h5>Age(s) Recommended-{ages.toString()}</h5>
              </Form.Label>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>
            <h2>Your Comment</h2>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            // cols={50}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit Review</Button>
        <Button
          style={{ margin: 10 }}
          type="reset"
          onClick={() => setReview("") || setRating("") || setAges([])}
        >
          Clear Review
        </Button>
      </Form>
      <ReviewList />
    </div>
  );
};
