import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        // <div className={`${darkMode && 'dark'}`}>
        <div className={`${darkMode ? 'dark' : 'light'}`}>
            <div className="dark:bg-neutral-900">
                <div className="flex justify-between p-5 list-none text-black dark:text-white">
                    <li className="ml-5 border-2 rounded-full pt-4 px-1 border-black dark:border-white">
                        <Link to="/">Recipes</Link>
                    </li>
                    <div className="flex">
                        <button className="mr-10 w-16 h-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold" onClick={toggleDarkMode}>
                            {darkMode ? 'Light Theme' : 'Dark Theme'}
                        </button>
                        <li className="mx-5 border-2 rounded-full pt-4 px-2.5 border-black dark:border-white">
                            {' '}
                            <Link to="/about">About</Link>
                        </li>
                        <li className="mx-5 border-2 rounded-full pt-4 px-2 border-black dark:border-white">
                            <a href="https://github.com/ZeckeyBay" target="_blank">
                                Github
                            </a>
                        </li>

                        <li className="mx-5 border-2 rounded-full pt-4 px-1 border-black dark:border-white">
                            {' '}
                            <Link to="/contact">Contact</Link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
