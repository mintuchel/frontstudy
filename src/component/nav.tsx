import React from 'react';
import Button from './button';

// 콜백함수 전달할때도 Props 정의해주기
interface NavProps {
    // category라는 string 값을 받고 void 리턴함
    onNavClick: (category: string) => void;
}

// NavProps를 받는데 그 중 onNavClick이라는 prop만 가져오기
const Nav: React.FC<NavProps> = ({ onNavClick }) => {
    return (
        <aside className="w-1/6 bg-blue-500 p-5">
            <h2 className="font-bold text-lg text-black mb-4 flex justify-center">여기가 Nav입니다</h2>
            <ul className="list-disc pl-5">
                <Button onClick={() => onNavClick('ManCity')}>ManCity</Button>
                <Button onClick={() => onNavClick('AstonVilla')}>AstonVilla</Button>
                <Button onClick={() => onNavClick('Chelsea')}>Chelsea</Button>
                <Button onClick={() => onNavClick('NewCastle')}>NewCastle</Button>
                <Button onClick={() => onNavClick('Wolverhampton')}>Wolverhampton</Button>
                <Button onClick={() => onNavClick('Liverpool')}>Liverpool</Button>
                <Button onClick={() => onNavClick('Brighton')}>Brighton</Button>
            </ul>
        </aside>
    );
};

export default Nav;