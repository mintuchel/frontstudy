import React from 'react';
import Button from './button';

const Nav = ({onNavClick}) => {
    return (
                <aside className="w-1/6 bg-blue-300 p-5">
                    <h2 className="font-bold text-lg text-black mb-4 flex justify-center">nav</h2>
                    <ul className="list-disc pl-5">
                        <Button onClick = {() => onNavClick('Chelsea')}>Chelsea</Button>
                        <Button onClick = {() => onNavClick('ManCity')}>ManCity</Button>
                        <Button onClick = {() => onNavClick('NewCastle')}>NewCastle</Button>
                        <Button onClick = {() => onNavClick('Wolverhampton')}>Wolverhampton</Button>
                    </ul>
                </aside>
    );
};

export default Nav;