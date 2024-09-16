import React from 'react';
import Button from './button';

const Nav = () => {
    return (
                <aside className="w-1/6 bg-blue-300 p-5">
                    <h2 className="font-bold text-lg text-black mb-4 flex justify-center">nav</h2>
                    <ul className="list-disc pl-5">
                        <Button>코스피 대형주</Button>
                        <Button>코스닥 상위</Button>
                        <Button>배당주</Button>
                        <Button>방어주</Button>
                        <Button>2차전지</Button>
                        <Button>미드스트림</Button>
                    </ul>
                </aside>
    );
};

export default Nav;