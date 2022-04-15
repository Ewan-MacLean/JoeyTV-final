import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "../ReviewPage/Rating";

const ShowCard = function (props) {
  const [rating, setRating] = useState(0);

  return (
    <Card className="mb-3" style={{ width: "60rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Card.Img variant="top" src={props.image} style={{ width: "15em" }} />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Header>
              <Card.Title>{props.name}</Card.Title>
              <Card.Title>Content ID: {props.id}</Card.Title>
              <Card.Text>{props.summary}</Card.Text>
              <Rating rating={props.rating} count={10} />
              <Card.Text>Movie Rating {props.rating}</Card.Text>
              <Button
                as={Link}
                to={"/details/" + props.showId}
                variant="primary"
              >
                Details
              </Button>
            </Card.Header>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default ShowCard;
