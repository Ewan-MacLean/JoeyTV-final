import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const Tags = ({ tags, setTags }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8888/tags")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleTags = (e) => {
    if (e.target.checked === true) {
      setTags(tags.concat([e.target.value]));
    } else {
      setTags(tags.filter((x) => x !== e.target.value));
    }
  };

  return (
    <Card style={{ width: "100%" }}>
      <Card.Header>
        <h2>Tags</h2>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <b>Characters: </b>
          {data[0] &&
            data[0].characters.map((character, index) => (
              <label key={index}>
                <Form.Check
                  inline
                  label={character}
                  type="checkbox"
                  value={character}
                  onChange={handleTags}
                />
              </label>
            ))}
        </ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <b>Contents: </b>
          {data[1] &&
            data[1].contents.map((content, index) => (
              <label key={index}>
                <Form.Check
                  inline
                  label={content}
                  type="checkbox"
                  value={content}
                  onChange={handleTags}
                />
              </label>
            ))}
        </ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <b>Genres: </b>
          {data[2] &&
            data[2].genres.map((genre, index) => (
              <label key={index}>
                <Form.Check
                  inline
                  label={genre}
                  type="checkbox"
                  value={genre}
                  onChange={handleTags}
                />
              </label>
            ))}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
