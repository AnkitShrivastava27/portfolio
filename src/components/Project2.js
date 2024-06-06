import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import p1p1 from '../Project2/p1p1.png';
import p1p2 from '../Project2/p1p2.png';
import p1p3 from '../Project2/p1p3.png';
import p1p4 from '../Project2/p1p4.png';
import p1p5 from '../Project2/p1p5.png'
import './Project.css';

const Project2 = () => {
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
        <div>
          <img src={p1p4} alt="cart" />
        </div>
        <div>
          <img src={p1p5} alt="cart" />
        </div>
      </Carousel>
      <div className='desc'>
        <h4>Tourist Guide UI</h4>
        <p>In this project, I meticulously crafted the user interface for a tourism guide website, employing a combination of HTML, CSS, and JavaScript to achieve a seamless and visually appealing design. The interface is designed to be intuitive and user-friendly, providing an engaging experience for visitors seeking information on various tourist destinations. Additionally, I incorporated responsive design principles to ensure compatibility across a range of devices, enhancing the accessibility and overall user experience of the website.</p>
        <div className="links">
        <ul>
        <h5>Technology used</h5>
          <li>JavaScript</li>
          
          <li>HTML, CSS</li>
        </ul>
        <ul>
            <h5>Links</h5>
            <li>Website : <a href="https://tryindia.vercel.app" >click here</a></li>
            <li>github repo : <a href="https://github.com/AnkitShrivastava27/touristGuide.git">Click here</a></li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Project2;
