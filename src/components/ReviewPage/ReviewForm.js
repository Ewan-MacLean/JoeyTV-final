import React, { useState } from "react";
import { AgeRecommended } from "./AgeRecommended";
import Rating from "./Rating";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { MovieDetails } from "./MovieDetails";
import ReviewList from "./ReviewList";
import { Tags } from "../Tags/Tags";
import { useParams } from "react-router-dom";

export const ReviewForm = (props) => {
  let { showId } = useParams();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [ages, setAges] = useState([]);
  const [tags, setTags] = useState([]);

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
      // userId: userId,
      review: review,
      rating: rating,
      ages: ages,
      tags: tags,
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
    <Card className="text-center">
      <MovieDetails showId={showId} />
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
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </Form.Group>
        <Tags tags={tags} setTags={setTags} />
        <Button type="submit">Submit Review</Button>
        <Button
          style={{ margin: 10 }}
          type="reset"
          onClick={() =>
            setReview("") || setRating("") || setAges([]) || setTags([])
          }
        >
          Form Reset
        </Button>
      </Form>
      <ReviewList />
    </Card>
  );
};
