import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const ReviewList = (props) => {
  const [usercomments, setUsercomments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/usercomments")
      .then((response) => {
        return response.json();
      })
      .then((usercomments) => setUsercomments(usercomments));
  }, []);

  return (
    <Card>
      <h2 style={{ margin: 10 }}>User Reviews</h2>
      {usercomments.map((usercomment) => (
        <Card.Body key={usercomment._id}>
          <Card.Header>{usercomment.review}</Card.Header>
          <Card.Footer style={{ fontStyle: "italic" }}>
            Age recommendation: {usercomment.ages.toString()} || Rating:
            {usercomment.rating} || Tags: {usercomment.tags.toString()}
          </Card.Footer>
        </Card.Body>
      ))}
    </Card>
  );
};

export default ReviewList;
