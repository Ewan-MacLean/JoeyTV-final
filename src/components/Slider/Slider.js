import React from "react";
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'


// let slideImage  = [
//     'https://static.tvmaze.com/uploads/images/medium_portrait/1/4898.jpg',
//     'https://static.tvmaze.com/uploads/images/medium_portrait/2/6242.jpg',
//     'https://static.tvmaze.com/uploads/images/medium_portrait/401/1002503.jpg',
//     'https://static.tvmaze.com/uploads/images/medium_portrait/402/1007439.jpg',
//     'https://static.tvmaze.com/uploads/images/medium_portrait/305/764844.jpg',
//     'https://static.tvmaze.com/uploads/images/medium_portrait/3/9460.jpg',
//     'https://static.tvmaze.com/uploads/images/medium_portrait/12/31612.jpg',
//     'https://static.tvmaze.com/uploads/images/medium_portrait/5/14778.jpg'
//     ];
    

function Sliders() {
  
  return (
    <>
    
      <div id="slider" className="mb-2">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://upload.wikimedia.org/wikipedia/en/3/37/Adventure_Time_-_Title_card.png'
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://phantom-marca.unidadeditorial.es/370dd60233f87af45a1b21321e9917b3/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/18/16476224020956.jpg'
      alt="Second slide"
    />
    </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://variety.com/wp-content/uploads/2021/02/pjimage-7-3.jpg'
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://nerdist.com/wp-content/uploads/2021/08/X-Men-header.jpg'
      alt="Fourth slide"
    />
    </Carousel.Item>

</Carousel>
</div>
</>

  )
}

export default Sliders