import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

export const Rating = ({ count, rating, color, onRating, getColor }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const starRating = useMemo(() => {
    const getColor = (index) => {
      if (hoverRating >= index) {
        return color.filled;
      } else if (!hoverRating && rating >= index) {
        return color.filled;
      }
      return color.unfilled;
    };

    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((index) => (
        <FaStar
          key={index}
          className="cursor-pointer"
          icon="fas fa-star"
          onClick={() => onRating(index)}
          style={{ color: getColor(index) }}
          onMouseEnter={() => setHoverRating(index)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [color.filled, color.unfilled, count, hoverRating, onRating, rating]);

  return <div>{starRating}</div>;
};

Rating.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};

export default Rating;
