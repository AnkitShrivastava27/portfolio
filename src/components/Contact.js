import React from "react";
import git from "../images/github.png";
import insta from "../images/instagram.png";
import linked from "../images/linkedin.png";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>

      {/* Social Links */}
      <div className="social-links">
        <p>Or reach out via:</p>
        <a href="https://github.com/AnkitShrivastava27" target="_blank" rel="noopener noreferrer">
          <img src={git} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/the.ankit.srivastava?igsh=azE0bG5mMzdod20w" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/ankit-kumar-shrivastava-79329226a" target="_blank" rel="noopener noreferrer">
          <img src={linked} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
