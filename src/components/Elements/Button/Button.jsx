/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Button = (props) => {
    const { children = '...', classname = 'bg-blue-600', onClick = () => {}, type = 'button' } = props;
    return (
        <button className={`bg-blue-800 h-10 px-6 text-white font-semibold ${classname} rounded-md`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
