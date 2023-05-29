const input = (props) => {
    const { type, placeholder, name } = props;

    return (
        <input
            type={type}
            className='text-sm rounded w-full py-2 px-3 text-slate-7000 
       placeholder:opacity-50'
            placeholder={placeholder}
            name={name}
        />
    );
};
export default input;
