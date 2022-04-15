import React from "react";
import "./footer.css";

const Footer = function (props) {
  return (
    <footer className="footer">
      <div className="ct-footer-post">
        <div className="container">
          <div className="inner-left">
            <ul>
              <li>{/* <a href="">FAQ</a> */}</li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>{/* <a href="">Contact Us</a> */}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
