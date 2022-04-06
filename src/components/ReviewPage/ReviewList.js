import React, { useState, useEffect } from "react";

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
    <div>
      <h3>Reviews from Other Users</h3>
      {usercomments.map((usercomment) => (
        <div key={usercomment._id}>
          <h4>{usercomment.review}</h4>
          <h5>
            Age recommendation: {usercomment.ages.toString()} || Rating-
            {usercomment.rating}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;