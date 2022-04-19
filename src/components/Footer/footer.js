import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./footer.css";

const Footer = function (props) {
  return (
    <Container fluid>
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
    </Container>
  );
};

export default Footer;
