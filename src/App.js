import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import MyNavbar from "./components/myNavbar/navbar";
import ShowList from "./components/ShowList/showList";
import PaginationNav from "./components/PaginationNav/paginationNav";
import Footer from "./components/Footer/footer";
import About from "./components/About/About";
import LoginForm from "./components/LoginPage/LoginForm";
import SignupForm from "./components/LoginPage/SignupForm";
import Form from "./components/ReviewPage/Form";
import Details from "./components/Views/Detail";
import Sliders from "./components/Slider/Slider";

import { Routes, Route } from "react-router-dom";


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);
  const [searchcolumns, setSearchColumns] = useState(["name"]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8888/movies")
      .then((x) => x.json())
      .then((x) => setData(x))
      .then(setLoading(false));
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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = search(data).slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
      <Container>
        <Row>
          <Col>
            <MyNavbar query={query} setQuery={setQuery} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Sliders/>
          </Col>
        </Row>
          <Routes>
          <Route path="/" element={
                    <div>
                    <ShowList showData={currentPosts} loading={loading} />
                    <PaginationNav
                      postsPerPage={postsPerPage}
                      totalPosts={data.length}
                      paginate={paginate}
                    />                
                  </div>
            } />
            <Route path="about" element={<About />} />
            <Route path="login" element={<LoginForm />} />
            {/* <Route path="signup" element={<Signupform />} /> */}
            <Route path="form" element={<Form />} />
            <Route path="details" element={<Details/>} />
          </Routes>
        <Footer />
      </Container>

  );
}

export default App;
