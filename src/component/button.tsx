import React from 'react';

const Button = ({ children }) => {
    return (
        <button className = "rounded-xl border-[3px] border-black px-4 my-2 w-full">
            {children}
        </button>
    );
};

export default Button;