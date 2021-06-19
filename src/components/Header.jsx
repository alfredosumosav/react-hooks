import React, { useState } from 'react'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
    document.getElementsByTagName('html')[0].classList.toggle('dark');
  }

  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}

export default Header
