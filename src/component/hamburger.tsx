import React, { useState } from "react";
import { Link } from "react-router-dom";

// ul = unordered list
// li = list item

const Hamburger = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button onClick={handleHamburger}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" className="h-6 w-6" />
            </button>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg">
                    <ul className="list-none p-0 m-0">
                        <li className="p-2 hover:bg-gray-200">
                            <Link to="/" className="text-black">Home</Link>
                        </li>
                        <li className="p-2 hover:bg-gray-200">
                            <Link to="/players" className="text-black">Players</Link>
                        </li>
                        <li className="p-2 hover:bg-gray-200">
                            <Link to="/mypage" className="text-black">MyPage</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Hamburger;