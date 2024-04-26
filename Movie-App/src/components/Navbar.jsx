import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <nav className={`bg-gray-700 shadow-lg`}>
            <div className="container mx-auto py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className={`text-lg font-semibold text-amber-300 hover:text-white`}>
                        Home
                    </Link>

                    {user?.email ? (
                        <div className="flex items-center">
                            <Link to="/contact" className={`text-lg pr-10 font-semibold text-amber-300 hover:text-white`}>
                                Contact
                            </Link>
                            <Link to="/account" className={`text-lg pr-10 font-semibold text-amber-300 hover:text-white`}>
                                Account
                            </Link>
                            <button onClick={handleLogout} className={`text-lg font-semibold text-amber-300 hover:text-white`}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <Link to="/contact" className={`text-lg pr-10 font-semibold text-amber-300 hover:text-white`}>
                                Contact
                            </Link>
                            <Link to="/login" className={`text-lg pr-10 font-semibold text-amber-300 hover:text-white`}>
                                Sign In
                            </Link>
                            <Link to="/signup" className={`text-lg font-semibold text-amber-300 hover:text-white`}>
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
