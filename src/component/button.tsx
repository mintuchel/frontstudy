import React from 'react';

interface ButtonProps {
    children: string;
    onClick: ()=> void;
}

// React.FC 는 Functional Component의 줄임말. 함수를 매개변수로 받을 수 있음
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className = "rounded-xl border-[3px] border-black px-4 my-2 w-full" onClick = {onClick}>
            <h2 className = "py-4 text-white">{children}</h2>
        </button>
    );
};

export default Button;