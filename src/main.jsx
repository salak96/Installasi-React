import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register';
// eslint-disable-next-line no-unused-vars
import ErrorPage from './pages/404.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
