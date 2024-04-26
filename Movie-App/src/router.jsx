import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import LayoutComponent from './Layout';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutComponent />,
        children: [
            { index: true, element: <Home /> },
            { path: 'contact', element: <Contact /> },
            { path: 'login', element: <Login /> },
            { path: 'signup', element: <Signup /> },
            {
                path: 'account',
                element: (
                    <ProtectedRoute>
                        <Account />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
