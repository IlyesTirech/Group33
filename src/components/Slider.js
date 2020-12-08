import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    return(

        <div className="slide">
           <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://www.wfeo.org/wp-content/uploads/HLPF-SDGs.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <button className="un">LEARN ABOUT THE <br/>SUSTAINABLE DEVELOPMENT GOALS </button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      alt="Second slide"
    />
    <Carousel.Caption>
      <button className="shop">SHOP WOMENS</button>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
    )
}

export default Slider;