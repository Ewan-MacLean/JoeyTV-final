import React from "react";
import "./CheckBox.css";

export const CheckBox = ({ columns, searchcolumns, setSearchColumns }) => {
  return (
    <div>
      <p className="contcheck">Properties</p>
      {columns &&
        columns.map((column) => (
          <label className="contcheck" key={column}>
            <input
              className="boxes"
              type="checkbox"
              checked={searchcolumns.includes(column)}
              onChange={(e) => {
                const checked = searchcolumns.includes(column);
                setSearchColumns((prev) =>
                  checked ? prev.filter((x) => x !== column) : [...prev, column]
                );
              }}
            />
            {column}
            <span className="checkmark"></span>
          </label>
        ))}
    </div>
  );
};
