import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import p1p1 from '../Project4/1.jpeg';
import p1p2 from '../Project4/2.jpeg';
import p1p3 from '../Project4/3.jpeg';
import p1p4 from '../Project4/4.jpeg';
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
      </Carousel>
      <div className='desc'>
        <h4>Hack & Shield</h4>
        <p>This Android application educates non-technical users about cybersecurity threats including phishing attacks, malware, and identity theft. Built with Android Studio using native development, it features comprehensive video lectures, interactive quizzes, and a scenario evaluator to assess real-world threat recognition. The app provides practical knowledge and hands-on experience to help users identify and respond to common cyber threats effectively.</p>
        <div className="links">
        <ul>
        <h5>Technology used</h5>
          <li>Java</li>
          <li>XML</li>
          <li>Android SDK </li>
        </ul>
        <ul>
            <h5>Links</h5>
            <li>Website : <a href="#">Not Deployed</a></li>
            <li>github repo : <a href="https://github.com/AnkitShrivastava27">Click here</a></li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Project1;
