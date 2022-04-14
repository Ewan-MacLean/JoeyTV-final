import React, { useState, useEffect } from "react";

export const MovieDetails = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/movies")
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data
        .filter((datum) => datum.id == "22651") //the movieId 22651 has to be handed down by props from the parent page
        .map((datum) => (
          <div key={datum._id}>
            <h1>{datum.name}</h1>
            <h2>Joey Rating: {datum.weight}</h2>
            <img src={datum.image.medium} alt={datum.name} />
            <p>{datum.summary} </p>
          </div>
        ))}
    </div>
  );
};
