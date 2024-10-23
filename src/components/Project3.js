import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import p1p1 from '../Project3/1.png';
import p1p2 from '../Project3/2.png';
import p1p3 from '../Project3/3.png';
import p1p4 from '../Project3/4.png';
import p1p5 from '../Project3/5.png'
import './Project.css';

const Project3 = () => {
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
        <h4>Blog Website</h4>
        <p>For my fourth semester project, I built a blog website using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. This project highlights my skills in creating a full-stack web application. The site features a user-friendly interface with React, ensuring a responsive and engaging experience. On the backend, Express.js and Node.js handle the server-side logic and API endpoints, making data flow smoothly. MongoDB efficiently manages the storage and retrieval of blog posts and comments. This project not only demonstrates my web development skills but also my ability to build practical and visually appealing applications.</p>
        <div className="links">
        <ul>
        <h5>Technology used</h5>
          <li>JavaScript</li>
          
          <li>HTML, CSS</li>
        </ul>
        <ul>
            <h5>Links</h5>
            <li>Website : <a href="https://wrightist.vercel.app/" >goto Website</a></li>
            <li>github repo : <a href="https://github.com/AnkitShrivastava27/BlogWebsite">Click here</a></li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Project3;
