import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function MyNavbar({ query, setQuery }) {
  return (
    <Navbar className="myNavbar fixed-top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          JoeyTV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="nav-links">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-links">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/form" className="nav-links">
              Write a Review
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-links">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="nav-links">
              Sign Up
            </Nav.Link>
            <NavDropdown title="My Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Reviews</NavDropdown.Item>
              <NavDropdown.Item href="#action3">wowee</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
