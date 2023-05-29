/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Button = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { children = '...', classname = 'bg-black' } = props;
    return (
        <button className={`h-10 px-6 text-white font-semibold ${classname} rounded-md`} type='submit'>
            {children}
        </button>
    );
};

export default Button;
