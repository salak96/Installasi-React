import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
const AuthLayouts = (props) => {
    const { children, title, type } = props;
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    return (
        <div className={`flex justify-center items-center min-h-screen ${isDarkMode && 'bg-slate-900'}`}>
            <div className='w-full max-w-md'>
                <div className='flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <button className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        <h1 className='flex justify-center text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
                        <p className='flex justify-center font-medium text-slate-500 m-6 p-2'>Welcome please, enter your details</p>
                        {children}
                        <Navigation type={type} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Navigation = ({ type }) => {
    if (type === 'login') {
        return (
            <p className='ml-10 flex justify-items-center align-center text-sm mt-4'>
                Dont have an account yet ?{' '}
                <Link to='/register' className='font-bold text-blue-600 hover:text-blue-800'>
                    Register
                </Link>
            </p>
        );
    } else {
        return (
            <p className='ml-10 flex justify-items-center align-center text-sm mt-4'>
                Already have an account ?{' '}
                <Link to='/login' className='font-bold text-blue-600 hover:text-blue-800'>
                    Login
                </Link>
            </p>
        );
    }
};
export default AuthLayouts;
