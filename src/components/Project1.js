import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import p1p1 from '../Projects/p1p1.png';
import p1p2 from '../Projects/p1p2.png';
import p1p3 from '../Projects/p1p3.png';
import './Project.css';

const Project1 = () => {
  return (
    <div className='project'>
      <Carousel 
        className="custom-carousel"
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
        showStatus={false}
      >
        <div>
          <img src={p1p1} alt="home" />
        </div>
        <div>
          <img src={p1p2} alt="contacts" />
        </div>
        <div>
          <img src={p1p3} alt="cart" />
        </div>
      </Carousel>
      <div className='desc'>
        <h4>Laptop UI</h4>
        <p>In this project, I utilized React.js and its libraries to develop the user interface for an e-commerce website specializing in laptop sales. By leveraging modern web development techniques and the component-based architecture of React, I created a responsive and dynamic shopping experience. The design focuses on providing an intuitive and seamless user journey, ensuring customers can easily browse, select, and purchase laptops. Additionally, the implementation includes state management and optimized rendering to enhance performance and user satisfaction.</p>
        <div className="links">
        <ul>
        <h5>Technology used</h5>
          <li>JavaScript</li>
          <li>ReactJs</li>
          <li>HTML, CSS</li>
        </ul>
        <ul>
            <h5>Links</h5>
            <li>Website : <a href="https://laptop-ui-liart.vercel.app/">Click here</a></li>
            <li>github repo : <a href="https://github.com/AnkitShrivastava27/laptopUi.git">Click here</a></li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Project1;
