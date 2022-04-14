import React from "react";
import Form from "react-bootstrap/Form";

export const AgeRecommended = ({ ages, setAges }) => {
  const handleCheckbox = (e) => {
    if (e.target.checked === true) {
      // setAges(ages.concat([e.target.name]));
      setAges([...ages, e.target.value]);
    } else {
      setAges(ages.filter((x) => x !== e.target.value));
    }
  };

  return (
    <div>
      <h2>Age Recommendation</h2>
      <Form.Check
        inline
        label="2"
        type="checkbox"
        value="2"
        onChange={handleCheckbox}
      />
      <Form.Check
        inline
        label="3"
        type="checkbox"
        value="3"
        onChange={handleCheckbox}
      />
      <Form.Check
        inline
        label="4"
        type="checkbox"
        value="4"
        onChange={handleCheckbox}
      />
      <Form.Check
        inline
        label="5"
        type="checkbox"
        value="5"
        onChange={handleCheckbox}
      />
      <Form.Check
        inline
        label="6"
        type="checkbox"
        value="6"
        onChange={handleCheckbox}
      />
      <Form.Check
        inline
        label="7"
        type="checkbox"
        value="7"
        onChange={handleCheckbox}
      />
      <Form.Check
        inline
        label="8"
        type="checkbox"
        value="8"
        onChange={handleCheckbox}
      />
      <Form.Check
        inline
        label="9"
        type="checkbox"
        value="9"
        onChange={handleCheckbox}
      />
      <Form.Check
        inline
        label="10"
        type="checkbox"
        value="10"
        onChange={handleCheckbox}
      />
    </div>
  );
};
