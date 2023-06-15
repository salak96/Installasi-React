/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Elements/Button/Button';

const AuthLayouts = (props) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { children, title, type } = props;
    return (
        <div className='flex justify-center bg-white min-h-0-screen items-center m-5 p-1'>
            <div className='w-full max-w-xs m-2'>
                <h1 className='flex justify-center text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
                <p className='flex justify-center font-medium text-slate-500 m-6 p-2'>Welcome please, enter your details</p>
                {children}
                <Navigation type={type} />
            </div>
        </div>
    );
};

const Navigation = (props) => {
    const { type } = props;
    return (
        <div className='flex justify-center'>
            <Link to={`/login/${type}`}>
                <Button type='button' className='bg-blue-600  hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg'>
                    Login
                </Button>
            </Link>
        </div>
    );
};


export default AuthLayouts;
