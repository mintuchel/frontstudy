import React from 'react';

interface ButtonProps {
    children: string;
    onClick: ()=> void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className = "rounded-xl border-[3px] border-black px-4 my-2 w-full" onClick = {onClick}>
            {children}
        </button>
    );
};

export default Button;