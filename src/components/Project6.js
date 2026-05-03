import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import p1p1 from '../Project6/1.png';
import p1p2 from '../Project6/2.png';
import p1p3 from '../Project6/3.png';
import p1p4 from '../Project6/4.png';
import p1p5 from '../Project6/5.png';
import p1p6 from '../Project6/6.png';
import p1p7 from '../Project6/7.png';
import p1p8 from '../Project6/8.png';
import './Project.css';

const Project6 = () => {
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
          <img src={p1p1} alt="Speed Strike Game" />
        </div>
        <div>
          <img src={p1p2} alt="How to play" />
        </div>
        <div>
          <img src={p1p3} alt="Velocity" />
        </div>
        <div>
          <img src={p1p4} alt="Electra" />
        </div>
        <div>
          <img src={p1p5} alt="Action1" />
        </div>
        <div>
          <img src={p1p6} alt="Action2" />
        </div>
        <div>
          <img src={p1p7} alt="Action3" />
        </div>
        <div>
          <img src={p1p8} alt="Action4" />
        </div>
      </Carousel>
      <div className='desc'>
        <h4>Speed Strike Game</h4>
        <p> I have built this game using Unity , this game is a single player game  and one level game with fast-paced action. and only final boss fight, this game was developed as a personal project to learn  game development skills. </p>
        <div className="links">
          <ul>
            <h5>Technology used</h5>
            <li>Unity</li>
            <li>C#</li>
            <li>Blender</li>
            <li>Visual Studio</li>
          </ul>
          <ul>
            <h5>Links</h5>
            <h3>Available for Windows only</h3>
            <li>Website : <a href="https://ankitshrivastav.itch.io/speedstrike" >Dowload here</a></li>
            <li>GitHub repo : <a href="https://github.com/AnkitShrivastava27/">Currently Private</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project6;
