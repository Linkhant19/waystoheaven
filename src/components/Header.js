import React from 'react';
import './Header.css';

// Header component !!!
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">SWH</div>
        <div className="header-title">
          <h1>Seven Ways to Heaven</h1>
          <p>poems collection</p>
        </div>
        <div className="header-tableofcontents">
          <p>Crown Dreams</p>
          <p>San Jose</p>
          <p>Creative Writing Class</p>
          <p>Seven Ways to Heaven</p>
          <p>Imaginary</p>
          <p>New People</p>
          <p>Jane</p>
        </div>
        <div className="header-name">
          <p>Written and Designed by</p>
          <h1>Lin</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
