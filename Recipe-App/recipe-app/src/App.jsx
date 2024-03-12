import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useTheme } from './ThemeContext';
import { useEffect } from 'react';

function App() {
    const { darkMode } = useTheme();

    useEffect(() => {
        const body = document.querySelector('body');
        if (body) {
            const mode = darkMode ? 'dark' : 'light';
            body.classList.remove(mode === 'dark' ? 'light' : 'dark');
            body.classList.add(mode);
        }
    }, [darkMode]);
    return <RouterProvider router={router} />;
}

export default App;
