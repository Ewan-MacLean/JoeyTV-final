import React, { useState, useEffect } from "react";
import MovieDetails from "../MovieDetails/MovieDetails";

export const SearchBox = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [searchcolumns, setSearchColumns] = useState(["_id"]);

  useEffect(() => {
    fetch("http://localhost:8888/movies")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    return rows.filter((row) =>
      searchcolumns.some(
        (column) =>
          row[column]
            .toString()
            .toLowerCase()
            .indexOf(query.toString().toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <br />
        {columns &&
          columns.map((column) => (
            <label key={column}>
              <input
                type="checkbox"
                checked={searchcolumns.includes(column)}
                onChange={(e) => {
                  const checked = searchcolumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((x) => x !== column)
                      : [...prev, column]
                  );
                }}
              />
              {column}
              <br />
            </label>
          ))}
      </div>
      <div>
        <MovieDetails data={search(data)} />
      </div>
    </div>
  );
};