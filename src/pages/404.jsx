import { useRouteError } from 'react-router-dom';

const ErorPage = () => {
    const error = useRouteError();
    return (
        <div className='flex justify-center bg-white min-h-0-screen items-center m-5 p-1'>
            <div className='w-full max-w-xs m-2'>
                <h1 className='flex justify-center text-3xl font-bold mb-2 text-blue-600'>Oops ! </h1>
                <p className='my-5 text-xl'>Sorry, an unexpected has occurred</p>
                <p className='flex justify-center font-lg text-slate-500'>{error.statusText || error.message}</p>
            </div>
        </div>
    );
};

export default ErorPage;
