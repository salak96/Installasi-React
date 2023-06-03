import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register';
import ProductPage from './pages/product';
import HomePage from './pages/home';
// eslint-disable-next-line no-unused-vars
import ErrorPage from './pages/404.jsx';

import { ProfilePage } from './pages/profile';
import { DetailPage } from './pages/detailProduct';
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
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
    {
        path: '/product',
        element: <ProductPage />,
    },
    {
        path: '/profile',
        element: <ProfilePage />,
    },
    {
        path: '/product/:id',
        element: <DetailPage />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
