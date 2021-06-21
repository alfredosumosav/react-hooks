import React, { useState } from 'react';
import "./Header.css"

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.getElementsByTagName('html')[0].classList.toggle('dark');
    document.getElementById('drkmod-btn').classList.toggle('dark');
  }

  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <label id="drkmod-btn" className="btn light" onClick={handleClick}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </label>
    </div>
  )
}

export default Header
