'use client';
import React, { useState } from 'react';
import styles from './navbar.module.css';
import { Toggle } from "@/components/ui/toggle";
import GitHubButton from 'react-github-btn';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"



const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    document.body.classList.toggle('light-mode', !newMode);
  };

  return (
    <NavigationMenu className={`${styles.navbar} ${isDarkMode ? styles.dark : styles.light}`}>
      <NavigationMenuList className={styles['navbar-container']}>
        <NavigationMenuItem>
          <div className={styles['logo-version-container']}>
            <div className={styles.logo}>
              <img 
                src={isDarkMode ? '/images/logo-dark.png' : '/images/logo-light.png'} 
                alt="Logo" 
              />
            </div>
            <button className={styles['version-btn']}>Version 1.0.1</button>
          </div>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ul className={styles['nav-items']}>
            <li><a href="#">Features</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <div className={styles['theme-social-container']}>
            <Toggle id="themeToggle" className={styles['theme-btn']} onClick={toggleTheme}>
                {isDarkMode ? <span className="moon">&#9789;</span> : <span className="sun">&#9728;</span>}
            </Toggle>

            <GitHubButton 
              href="https://github.com/StellaX-Browser/stellax.webpage" 
              data-color-scheme="no-preference: dark; light: light; dark: dark;" 
              data-size="large" 
              data-show-count="true" 
              aria-label="Star StellaX-Browser/stellax.webpage on GitHub"
            >
              Star
            </GitHubButton>

            <div className={styles['social-icons']}>
              <a href="#"><img src="/images/discord-icon.png" alt="Discord" /></a>
            </div>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;