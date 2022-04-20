import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const ReviewList = (props) => {
  const [usercomments, setUsercomments] = useState([]);

  const summarizeComments = (usercomments) => {
    let filteredComments = usercomments.filter(
      (comment) => comment.showId == props.showId
    );
    setUsercomments(filteredComments);
  };

  useEffect(() => {
    fetch("http://localhost:8888/usercomments")
      .then((response) => {
        return response.json();
      })
      .then((usercomments) => summarizeComments(usercomments))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card>
      <h2 style={{ margin: 10 }}>User Reviews</h2>
      {usercomments.length > 0
        ? usercomments.map((usercomment) => (
            <Card.Body key={usercomment._id}>
              <Card.Header>{usercomment.review}</Card.Header>
              <Card.Footer style={{ fontStyle: "italic" }}>
                Age recommendation: {usercomment.ages.toString()} || Rating:
                {usercomment.rating} || Tags: {usercomment.tags.toString()}
              </Card.Footer>
            </Card.Body>
          ))
        : "Be the first one to write a review."}
    </Card>
  );
};

export default ReviewList;
