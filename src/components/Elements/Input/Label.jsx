const label = (props) => {
    const { htmlFor, children } = props;
    return (
        <label htmlFor={htmlFor} className='block mb-2 text-sm text-slate-700'>
            {children}
        </label>
    );
};

export default label;
