import React from "react";
import git from "../images/github.png";
import insta from "../images/instagram.png";
import linked from "../images/linkedin.png";
import profile from "../images/profile.jpg";
import Resume from "./resume.pdf";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaNodeJs, FaDatabase, FaAndroid } from 'react-icons/fa';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img className="profile-image" src={profile} alt="Profile" />
        <div className="intro-text">
          <h4>Hi There! 👋</h4>
          <h1>I’m <span>Ankit Kumar Shrivastava</span></h1>
          <p>
            A passionate B.Tech student specializing in Computer Engineering at <strong>Marwadi University</strong>. 
            Skilled in Python, JavaScript, and web development, I thrive on creating innovative solutions and contributing to open-source projects. 
            I am currently seeking internship opportunities to expand my expertise in real-world applications.
          </p>
          {/* Download Resume Button */}
          <a href={Resume} download="Ankit_Shrivastava_Resume.pdf" className="resume-button">
            📄 Download Resume
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-list">
          <div className="skill">
            <FaHtml5 className="skill-icon" />
            <p>HTML5</p>
          </div>
          <div className="skill">
            <FaCss3Alt className="skill-icon" />
            <p>CSS3</p>
          </div>
          <div className="skill">
            <FaJsSquare className="skill-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FaReact className="skill-icon" />
            <p>ReactJS</p>
          </div>
          <div className="skill">
            <FaNodeJs className="skill-icon" />
            <p>NodeJS</p>
          </div>
          <div className="skill">
            <FaPython className="skill-icon" />
            <p>Python</p>
          </div>
          <div className="skill">
            <FaDatabase className="skill-icon" />
            <p>SQL & MongoDB</p>
          </div>
          <div className="skill">
            <FaAndroid className="skill-icon" />
            <p>Android Studio</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-info">
        <h4>Contact Info</h4>
        <p><strong>Address:</strong> GopalGanj, Bihar, (841438)</p>
        <p><strong>Email:</strong> <a href="mailto:ankitshrivastvaks@gmail.com">ankitshrivastvaks@gmail.com</a></p>
        
        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/AnkitShrivastava27" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={git} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/the.ankit.srivastava?igsh=azE0bG5mMzdod20w" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={insta} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-shrivastava-79329226a" target="_blank" rel="noopener noreferrer">
            <img className="social-icon" src={linked} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
