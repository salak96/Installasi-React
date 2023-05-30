// eslint-disable-next-line no-unused-vars
const AuthLayouts = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children, title } = props;
    return (
        <div className='flex justify-center bg-white min-h-0-screen items-center m-5 p-1'>
            <div className='w-full max-w-xs m-2'>
                <h1 className='flex justify-center text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
                <p className='flex justify-center font-medium text-slate-500 m-6 p-2'>Welcome please, enter your details</p>
                {children}
            </div>
        </div>
    );
};

export default AuthLayouts;
