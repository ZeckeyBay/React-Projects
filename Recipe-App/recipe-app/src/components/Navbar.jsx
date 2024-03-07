import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

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
                    <li className="ml-5 border-2 rounded-full pt-4 px-1 bg-blue-500 text-black font-semibold hover:bg-blue-600 border-blue dark:border-white dark:text-white">
                        <Link to="/">Recipes</Link>
                    </li>
                    <div className="flex">
                        <li className="mx-5 border-2 rounded-full pt-4 px-2.5 border-blue bg-blue-500 text-black font-semibold  hover:bg-blue-600 dark:border-white dark:text-white">
                            {' '}
                            <Link to="/about">About</Link>
                        </li>
                        <li className="mx-5 border-2 rounded-full pt-4 px-2 border-blue bg-blue-500 text-black font-semibold hover:bg-blue-600 dark:border-white dark:text-white">
                            <a href="https://github.com/ZeckeyBay" target="_blank">
                                Github
                            </a>
                        </li>

                        <li className="mx-5 border-2 rounded-full pt-4 px-1 border-blue bg-blue-500 text-black font-semibold hover:bg-blue-600 dark:border-white dark:text-white">
                            {' '}
                            <Link to="/contact">Contact</Link>
                        </li>
                        <MdOutlineLightMode />
                        <MdDarkMode />
                        <button className="mr-10 ml-5 w-16 h-16 bg-neutral-900 text-white dark:bg-white rounded-full  dark:text-black font-semibold" onClick={toggleDarkMode}>
                            {darkMode ? 'Light Theme' : 'Dark Theme'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
