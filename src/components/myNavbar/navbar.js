import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./navbar.css";

function MyNavbar({ query, setQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.value);
  };

  return (
    <Navbar className="myNavbar" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">JoeyTV</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="nav-links" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="nav-links" href="#action2">
              Write Review
            </Nav.Link>
            <Nav.Link className="nav-links" href="#action3">
              Saved
            </Nav.Link>
            <NavDropdown title="My Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Reviews</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Saved</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form
            className="d-flex"
            action="/profile"
            method="Post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
