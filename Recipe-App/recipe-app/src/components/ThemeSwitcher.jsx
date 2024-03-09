import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from '../ThemeContext';

const ThemeSwitcher = () => {
    const { darkMode, setDarkMode } = useTheme();

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    console.log('darkMode', darkMode);
    return (
        <div className="flex items-center gap-1" onClick={toggleTheme}>
            <MdOutlineLightMode color={darkMode ? 'white' : 'black'} className={`text-xl cursor-pointer`} />
            <button className="w-12 h-6 relative rounded-full dark:bg-blue-500 bg-gray-300 focus:outline-none">
                <div className="w-6 h-6 absolute top-0 transition-transform duration-300 ease-in-out dark:transform dark:translate-x-full" style={{ backgroundColor: '#fff', borderRadius: '50%' }} />
            </button>
            <MdDarkMode color={darkMode ? 'white' : 'black'} className={`text-xl cursor-pointer`} />
        </div>
    );
};

export default ThemeSwitcher;
