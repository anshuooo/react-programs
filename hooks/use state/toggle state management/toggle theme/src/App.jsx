import { useState, useEffect } from 'react';
import "./App.css";

  function ThemeToggle() {
    // State to hold the current theme
    const [theme, setTheme] = useState('light');
  
    // Effect to apply the theme to the body or document
    useEffect(() => {
      document.body.className = theme; // Apply theme class to the body
    }, [theme]); // Run this effect whenever the theme changes
  
    // Toggle theme handler
    const handleThemeChange = (newTheme) => {
      setTheme(newTheme); // Update the theme state
    };

  return (
    <div className="theme-toggle-container">
    <h1>Toggle Theme</h1>
    <div className="theme-buttons">
      <button onClick={() => handleThemeChange('light')}>Light</button>
      <button onClick={() => handleThemeChange('dark')}>Dark</button>
      <button onClick={() => handleThemeChange('solarized')}>Solarized</button>
    </div>
  </div>
        
  )
}

export default ThemeToggle;
