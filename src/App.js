import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TeamMatching from './components/TeamMatching';
import Chat from './components/Chat';
import ProjectListing from './components/ProjectListing';
import './index.css'; 

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              {token && <li><Link to="/team-matching">Team Matching</Link></li>}
              {token && <li><Link to="/chat">Chat</Link></li>} 
              {token && <li><Link to="/projects">Project Listing</Link></li>}
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/team-matching" element={<TeamMatching />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/projects" element={<ProjectListing />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className='card'>
    <h1>Welcome to the Hackathon Team Finder</h1>
    <p>Find teammates for your hackathon projects or group challenges!</p>
  </div>
);

export default App;
