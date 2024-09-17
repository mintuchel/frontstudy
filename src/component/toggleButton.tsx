import React, { useState } from 'react';

// prop을 전달받지 않을때는 React.FC를 안해도 된다
const ToggleButton = () => {
    // setIsOn 함수가 호출되면 isOn 값이 바뀌고
    // isOn 값이 바뀌면 렌더링해라
    const [isOn, setIsOn] = useState(false);

    // setIsOn을 호출하는 함수
    const toggle = () => setIsOn(!isOn);

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <button
                // 버튼이 클릭되었을때 toggle 함수를 호출해라 -> useState 때문에 렌더링됨
                onClick={toggle}
                className={`w-20 h-10 rounded-full focus:outline-none transition-colors duration-300
          ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
            >
                <div
                    className={`w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${isOn ? 'translate-x-10' : 'translate-x-0'}`}
                />
            </button>

            {/* 메뉴 항목들 */}
            {isOn && (
                <ul className="bg-gray-100 p-4 rounded-md shadow-md">
                    <li className="p-2 border-b">Chelsea</li>
                    <li className="p-2 border-b">ManCity</li>
                    <li className="p-2 border-b">NewCastle</li>
                    <li className="p-2">Wolverhampton</li>
                </ul>
            )}
        </div>
    );
}

export default ToggleButton;