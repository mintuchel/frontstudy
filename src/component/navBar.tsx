import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleBar, setToggleBar] = useState(true);

    const toggleChange = () => {
        setToggleMenu(!toggleMenu);
        setToggleBar(!toggleBar);
    };

    const onMenuClick = () => {
        setToggleMenu(!toggleMenu);
        setToggleBar(!toggleBar);
    };

    return (
        <div>
            {/* Web */}
            <div className="hidden md:flex justify-between p-4">
                <div className="flex space-x-4">
                    <Link to="/subscribe" className="text-black">구독하기</Link>
                    <Link to="/products" className="text-black">상품 보기</Link>
                    <Link to="/support" className="text-black">고객센터</Link>
                </div>
                <div className="flex space-x-4">
                    <Link to="/login" className="text-black">로그인</Link>
                    <Link to="/signup" className="text-black">회원가입</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
