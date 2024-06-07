 import React from "react"
 import git from '../images/github.png'
import insta from '../images/instagram.png'
import linked from '../images/linkedin.png'
import profile from'../images/profile.jpg'
import './home.css';
 const Home=()=>{
    return(
        <div>
        <div className="home">
        <div >
         <img className='profile' src={profile}/>
        </div>
        <div>
            <h4>Hii There!</h4>
            <p> I'm <strong>Ankit Kumar Shrivastava</strong>, currently a third-year B.Tech student specializing in Computer Engineering at <strong>Marwadi University</strong>. With a strong passion for technology and innovation, I am skilled in Python, JavaScript, and web development. I am enthusiastic about contributing to open-source projects and am actively seeking internship opportunities to apply and expand my knowledge in real-world settings.</p>
               <h1>Skills</h1>
            <ul><li>JavaScript</li>
            <li>Java</li>
            <li>Html,css</li>
            <li>ReactJs</li>
          <li>ExpressJs, NodeJs</li>
          <li>Python</li>
          <li>sql , mongodb</li></ul>
        </div>
        </div>
        <h5>Address: GopalGanj , Bihar , (841438)</h5>
        <h5>Email:ankitshrivastvaks@gmail.com</h5>
        
        <ul className='mainLogo'>
          <li><a href='https://github.com/AnkitShrivastava27'><img  className="logo" src={git}/></a></li>
          <li><a href='https://www.instagram.com/the.ankit.srivastava?igsh=azE0bG5mMzdod20w'><img  className="logo" src={insta}/></a></li>
          <li><a href='https://www.linkedin.com/in/ankit-kumar-shrivastava-79329226a'><img  className="logo" src={linked}/></a></li>
        </ul>
        </div>
    )

 }
 export default Home