/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const input = forwardRef((props, ref) => {
    const { type, placeholder, name } = props;
    return (
        <input
            type={type}
            className='text-sm rounded w-full py-2 px-3 text-slate-700 border border-slate-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-600 focus:ring-opacity-50
                placeholder:opacity-50'
            placeholder={placeholder}
            name={name}
            id={name}
            ref={ref}
        />
    );
});
export default input;
