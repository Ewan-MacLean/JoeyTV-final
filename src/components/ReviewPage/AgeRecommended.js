import React from "react";

function AgeRecommended({ ages, setAges }) {
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
      <input
        onChange={handleCheckbox}
        type="checkbox"
        className="checkbox"
        id="age2"
        name="2"
        value="2"
      />
      2
      <input
        onChange={handleCheckbox}
        type="checkbox"
        className="checkbox"
        id="age3"
        name="3"
        value="3"
      />
      3
      <input
        onChange={handleCheckbox}
        type="checkbox"
        className="checkbox"
        id="age4"
        name="4"
        value="4"
      />
      4
      <input
        onChange={handleCheckbox}
        type="checkbox"
        className="checkbox"
        id="age5"
        name="5"
        value="5"
      />
      5
      <input
        onChange={handleCheckbox}
        type="checkbox"
        className="checkbox"
        id="age6"
        name="6"
        value="6"
      />
      6
      <input
        onChange={handleCheckbox}
        type="checkbox"
        className="checkbox"
        id="age7"
        name="7"
        value="7"
      />
      7
      <input
        onChange={handleCheckbox}
        type="checkbox"
        className="checkbox"
        id="age8"
        name="8"
        value="8"
      />
      8
      <input
        onChange={handleCheckbox}
        type="checkbox"
        className="checkbox"
        id="age9"
        name="9"
        value="9"
      />
      9
      <input
        onChange={handleCheckbox}
        type="checkbox"
        className="checkbox"
        id="age10"
        name="10"
        value="10"
      />
      10
    </div>
  );
}

export default AgeRecommended;