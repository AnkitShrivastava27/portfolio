import {BrowserRouter as Router , Link , Routes , Route} from 'react-router-dom'
import './App.css';
import Certificates from './components/Certificates';
import Project from './components/Projects';
import Home from './components/Home';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className='main'>
    <Router>
    <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to='/Education'>Education</Link></li>
          <li><Link to='/Contact'>Hire Me</Link></li>
        </ul>
     
          
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/certificates' element={<Certificates/>}/>
        <Route path='/Projects' element={<Project/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
