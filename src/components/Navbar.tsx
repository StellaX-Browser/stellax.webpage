'use client';
import React, { useState } from 'react';
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    document.body.classList.toggle('light-mode', !newMode);
  };

  return (
    <nav className={`${styles.navbar} ${isDarkMode ? styles.dark : styles.light}`}>
      <div className={styles['navbar-container']}>
        <div className={styles['logo-version-container']}>
          <div className={styles.logo}>
            <img 
              src={isDarkMode ? '/images/logo-dark.png' : '/images/logo-light.png'} 
              alt="Logo" 
            />
          </div>
          <button className={styles['version-btn']}>Version 1.0.1</button>
        </div>

        <ul className={styles['nav-items']}>
          <li><a href="#">Features</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>

        <div className={styles['theme-social-container']}>
          <button id="themeToggle" className={styles['theme-btn']} onClick={toggleTheme}>
            {isDarkMode ? <span className="moon">&#9789;</span> : <span className="sun">&#9728;</span>}
          </button>

          <div className={styles['social-icons']}>
            <a href="#"><img src="/images/github-icon.png" alt="GitHub" /></a>
            <a href="#"><img src="/images/discord-icon.png" alt="Discord" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
