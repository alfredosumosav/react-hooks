import React, { useState, useContext } from 'react';
import "./Header.css"
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.getElementsByTagName('html')[0].classList.toggle('dark');

    // find all the elements that need to be changed to dark mode and toggle the 'dark' class
    const elements = document.getElementsByClassName('light');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.toggle('dark');
    }
  }

  return (
    <div className="Header">
      <h1 style={{ color }}>ReactHooks</h1>
      <label id="drkmod-btn" className="btn light" onClick={handleClick}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </label>
    </div>
  )
}

export default Header
