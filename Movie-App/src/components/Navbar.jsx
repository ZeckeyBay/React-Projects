import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={`bg-gray-700 shadow-lg`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className={`text-lg font-semibold text-amber-300 hover:text-white`}>
                        Home
                    </Link>

                    <div className="flex items-center">
                        <div className={`text-lg pr-10 font-semibold text-amber-300 hover:text-white`}>
                            <a href="https://github.com/ZeckeyBay" target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </div>

                        <Link to="/contact" className={`text-lg pr-10 font-semibold text-amber-300 hover:text-white`}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
