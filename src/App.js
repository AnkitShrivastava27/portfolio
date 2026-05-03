// import {BrowserRouter as Router , Link , Routes , Route} from 'react-router-dom'
// import './App.css';
// import Certificates from './components/Certificates';
// import Project from './components/Projects';
// import Home from './components/Home';
// import Education from './components/Education';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className='main'>
//     <Router>
//     <ul className='navbar'>
//         <li><Link to="/">Home</Link></li>
//           <li><Link to="/certificates">Certificates</Link></li>
//           <li><Link to="/Projects">Projects</Link></li>
//           <li><Link to='/Education'>Education</Link></li>
//           <li><Link to='/Contact'>Hire Me</Link></li>
//         </ul>
     
          
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/certificates' element={<Certificates/>}/>
//         <Route path='/Projects' element={<Project/>}/>
//         <Route path='/Education' element={<Education/>}/>
//         <Route path='/Contact' element={<Contact/>}/>
//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Certificates from './components/Certificates';
import Project from './components/Projects';
import Home from './components/Home';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className='main'>
      <Router>

        {/* ── Desktop navbar (hidden on mobile via CSS) ── */}
        <ul className='navbar'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to='/Education'>Education</Link></li>
          <li><Link to='/Contact'>Hire Me</Link></li>
        </ul>

        {/* ── Mobile nav strip (hidden on desktop via CSS) ── */}
        <nav className='nav-wrapper'>
          {/* Always-visible strip with hamburger */}
          <div className='nav-strip'>
            <span className='nav-strip-title'>Hello</span>
            <button
              className={`menu-toggle ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Dropdown links */}
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/certificates" onClick={closeMenu}>Certificates</Link></li>
            <li><Link to="/Projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/Education" onClick={closeMenu}>Education</Link></li>
            <li><Link to="/Contact" onClick={closeMenu}>Hire Me</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/Projects' element={<Project />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;