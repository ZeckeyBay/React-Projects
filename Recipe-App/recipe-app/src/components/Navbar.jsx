import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <nav className={`bg-${isDarkMode ? 'neutral-900' : 'white'} shadow-lg`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className={`text-lg font-semibold text-${isDarkMode ? 'white' : 'gray-800'} hover:text-blue-600 dark:text-white`}>
                        Recipes
                    </Link>

                    <div className="flex items-center">
                        <Link to="/about" className={`text-lg pr-10 font-semibold text-${isDarkMode ? 'white' : 'gray-800'} hover:text-blue-600 dark:text-white`}>
                            About
                        </Link>

                        <div className={`text-lg pr-10 font-semibold text-${isDarkMode ? 'white' : 'gray-800'} hover:text-blue-600 dark:text-white`}>
                            <a href="https://github.com/ZeckeyBay" target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>

                        <Link to="/contact" className={`text-lg pr-10 font-semibold text-${isDarkMode ? 'white' : 'gray-800'} hover:text-blue-600 dark:text-white`}>
                            Contact
                        </Link>

                        <MdOutlineLightMode className={`text-xl cursor-pointer ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`} onClick={() => setIsDarkMode(false)} />
                        <button className="w-12 h-6 relative rounded-full bg-blue-500 focus:outline-none" onClick={toggleTheme}>
                            <div
                                className={`w-6 h-6 absolute top-0 transition-transform duration-300 ease-in-out ${isDarkMode ? 'transform translate-x-full' : ''}`}
                                style={{ backgroundColor: '#fff', borderRadius: '50%' }}
                            />
                        </button>
                        <MdDarkMode className={`text-xl cursor-pointer ${isDarkMode ? 'text-gray-800' : 'text-gray-400'}`} onClick={() => setIsDarkMode(true)} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
