import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import p1p1 from '../Project5/1.jpeg';
import p1p2 from '../Project5/2.jpeg';
import p1p3 from '../Project5/3.jpeg';
import p1p4 from '../Project5/4.jpeg';
import p1p5 from '../Project5/5.jpeg';
import p1p6 from '../Project5/6.jpeg';
import p1p7 from '../Project5/7.jpeg';
import p1p8 from '../Project5/8.jpeg';
import p1p9 from '../Project5/9.jpeg';
import p1p10 from '../Project5/10.jpeg';
import p1p11 from '../Project5/11.jpeg';
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
          <img className="phone" src={p1p1} alt="1" />
        </div>
        <div>
          <img className="phone" src={p1p2} alt="2" />
        </div>
        <div>
          <img className="phone" src={p1p3} alt="3" />
        </div>
         <div>
          <img className="phone" src={p1p4} alt="4" />
        </div>
         <div>
          <img className="phone" src={p1p5} alt="5" />
        </div>
         <div>
          <img className="phone" src={p1p6} alt="6" />
        </div>
         <div>
          <img className="phone" src={p1p7} alt="7" />
        </div>
         <div>
          <img className="phone" src={p1p8} alt="8" />
        </div>
         <div>
          <img className="phone" src={p1p9} alt="9" />
        </div>
         <div>
          <img className="phone" src={p1p10} alt="10" />
        </div>
         <div>
          <img className="phone" src={p1p11} alt="11" />
        </div>

      </Carousel>
      <div className='desc'>
        <h4>AyuWell</h4>
        <p>AyuWell is an Android application designed to provide users with a comprehensive platform for managing their health and wellness. The app offers a range of features, including personalized health tracking, medication reminders, and access to a library of health resources. With its user-friendly interface and robust functionality, AyuWell aims to empower individuals to take control of their health and make informed decisions about their well-being.</p>
        
        <div className="links">
        <ul>
        <h5>Technology used</h5>
          <li>Flutter Framework</li>
          <li>Dart Programming Language</li>
          <li>Android SDK </li>
        </ul>
        <ul>
            <h5>Links</h5>
            <li>Download: <a href="https://github.com/AnkitShrivastava27/ProjectAyuwll/releases/tag/beta">Download</a></li>
            <li>github repo : <a href="https://github.com/AnkitShrivastava27">Click here</a></li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Project1;
