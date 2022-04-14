import React from "react";
import "./About.css";

function About() {
  return (
    <div class="about-section">
      <div class="inner-container">
        <h1>About Us</h1>
        <p class="text">
          <b>
            Joey TV helps parents to choose wholesome movies and TV shows for
            the safe entertainment of their children...
          </b>
        </p>
        {/* <h2 style="text-align:center">Our Team</h2> */}
        <h2>Our Team</h2>
        <div class="team">
          <span>Claudia Tucunduva Ton</span>
          <span>Stephen Oshilaja</span>
          <span>Matt Downie</span>
          <span>Ewan MacLean</span>
          <span>Katherine Cassidy</span>
          <span>Marvel Monson</span>
        </div>
      </div>
    </div>
  );
}

export default About;
