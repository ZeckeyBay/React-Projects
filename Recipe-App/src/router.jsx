import { createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import LayoutComponent from './Layout';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutComponent />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
]);
