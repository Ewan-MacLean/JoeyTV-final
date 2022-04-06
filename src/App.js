import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import MyNavbar from './components/myNavbar/navbar';
import ShowList from './components/ShowList/showList';
import PaginationNav from './components/PaginationNav/paginationNav';

function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(()=>{
    setLoading(true)
    fetch('http://localhost:8888/movies')
      .then(x=>x.json())
      .then(x=>setData(x))
      .then(setLoading(false))
  },[]);

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <MyNavbar/>
      <Container>
        <ShowList showData={currentPosts} loading={loading}/>
        <PaginationNav 
        postsPerPage={postsPerPage} 
        totalPosts={data.length} 
        paginate={paginate}
        />
      </Container>
    </div>
  );
};

export default App;

