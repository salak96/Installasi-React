/* eslint-disable react/prop-types */
const Button = (props) => {
    // eslint-disable-next-line no-unused-vars
    const {children="...", variant='bg-black'}=props;
    return <button 
    className={`h-10 px-6 text-white font-semibold ${variant} rounded-md`} type="submit"
    >
    {children}

    </button>;
}

export default Button;
