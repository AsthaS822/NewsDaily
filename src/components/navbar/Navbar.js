import React from 'react';
import './Navbar.css';

// The Navbar component receives `onCountryChange` as a prop.
// It should call this prop function to update the country state.
const Navbar = ({ onCountryChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Daily News</div>
      <div className="navbar-buttons">
        <button className="nav-btn" onClick={() => onCountryChange('us')}>US</button>
        <button className="nav-btn" onClick={() => onCountryChange('in')}>IN India</button>
        <button className="nav-btn" onClick={() => onCountryChange('gb')}>GB UK</button>
      </div>
    </nav>
  );
};

export default Navbar;