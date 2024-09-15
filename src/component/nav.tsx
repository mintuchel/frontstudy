import React from 'react';

const Nav = () => {
    return (
                <aside className="w-1/6 bg-blue-300 p-5">
                    <h2 className="font-bold text-lg text-black mb-4 flex justify-center">nav</h2>
                    <ul className="list-disc pl-5 ">
                        <li>코스피 대형주</li>
                        <li>배당주</li>
                        <li>2차전지</li>
                        <li>미드스트림</li>
                    </ul>
                </aside>
    );
};

export default Nav;