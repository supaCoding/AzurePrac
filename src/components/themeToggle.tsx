import React from 'react';
import { useThemeContext } from '../context/themeContext';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <button className="toggle-theme" onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeToggle;