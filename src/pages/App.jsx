import { Routes, Route, Link } from "react-router-dom";
import { useContext, useState } from "react";
import './App.css';
import Home from './Home.jsx';
import Editing from './Editing.jsx';
import Games from './Games.jsx';
import Apps from './Apps.jsx';
import About from './About.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx'; 
import { SearchContext } from '../SearchContext.jsx';

function App() {
  const { setSearchQuery } = useContext(SearchContext);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  return (
    <div>
      <nav className="nav1">
        <div className="logo">
          <h1>Ap'S Mod Store</h1>
        </div>


        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        
        <ul className={`menu-list ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/editing" className="nav-link" onClick={() => setMenuOpen(false)}>Editing</Link></li>
          <li><Link to="/games" className="nav-link" onClick={() => setMenuOpen(false)}>Games</Link></li>
          <li><Link to="/apps" className="nav-link" onClick={() => setMenuOpen(false)}>Apps</Link></li>
          <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About us</Link></li>
          <li><Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link></li>
          
          <li>
            <input
              type="text"
              placeholder="Search..."
              className="nav-search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editing" element={<Editing />} />
          <Route path="/games" element={<Games />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* <--- NEW: Add Register Route */}
          <Route path="/forgot-password" element={<div>Forgot Password Page Placeholder</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;