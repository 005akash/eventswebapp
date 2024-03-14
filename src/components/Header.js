import React, { useState } from 'react';
import './Head.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navigation menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggles the state value
  };

  return (
    <div className='hmain'>
      {/* Existing "ham" icon */}
      <div className='ham' onClick={toggleNav}>
        <span className="material-symbols-outlined">menu</span>
      </div>

      {/* Logo placeholder */}
      <div className='hlogo'></div>

      {/* Navigation menu */}
      <ul className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
        <li>For you</li>
        <li>Explore</li>
        <li>Concerts</li>
        <li>Campaigns</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

export default Header;
