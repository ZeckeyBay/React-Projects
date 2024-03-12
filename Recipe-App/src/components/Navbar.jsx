import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
    return (
        <nav className={`bg-white shadow-lg dark:bg-black`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className={`text-lg font-semibold text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-600`}>
                        Recipes
                    </Link>

                    <div className="flex items-center">
                        <Link to="/about" className={`text-lg pr-10 font-semibold hover:text-blue-600 dark:text-white dark:hover:text-blue-600`}>
                            About
                        </Link>

                        <div className={`text-lg pr-10 font-semibold hover:text-blue-600 dark:text-white dark:hover:text-blue-600`}>
                            <a href="https://github.com/ZeckeyBay" target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>

                        <Link to="/contact" className={`text-lg pr-10 font-semibold hover:text-blue-600 dark:text-white dark:hover:text-blue-600`}>
                            Contact
                        </Link>

                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
