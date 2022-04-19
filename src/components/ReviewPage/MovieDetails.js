import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const MovieDetails = (props) => {
  let { showId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/movies")
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, []);

  return (
    <Card className="text-center mt-3">
      {data
        .filter((datum) => datum.id == showId)
        .map((datum) => (
          <div key={datum._id}>
            <Card.Title>
              <h2>{datum.name}</h2>
            </Card.Title>
            <Card.Img
              style={{ width: "18rem" }}
              src={datum.image.medium}
              alt={datum.name}
            />
            <Card.Body>
              <Card.Text>{datum.summary}</Card.Text>
            </Card.Body>
          </div>
        ))}
    </Card>
  );
};
