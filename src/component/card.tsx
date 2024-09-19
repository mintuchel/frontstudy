import React from 'react';

// CardProp 정의하기
interface CardProps {
    imgurl: string,
    name: string;
    price: string;
    position: string;
    onAddToMyTeam: () => void; // 콜백함수 전달하기 위해 함수포인터 추가
}

// w-full = 이미지를 부모 요소의 전체 너비에 맞추기
// min-h-fit = 이미지의 최소 높이를 부모요소
// object-contain = 해당 사이즈에 맞게 이미지 축소
// justify-between = 자식 컴포넌트를 똑같은 간격으로 배치함

// Box는 CardProp을 전달받고 그 중 imgurl, name, price, position, onAddToMyTeam을 추출해 사용하겠다
const Card: React.FC<CardProps> = ({ imgurl, name, price, position, onAddToMyTeam }) => {
    return (
        <div className="rounded-2xl overflow-hidden border-[3px] border-black h-full">
            <h3 className="font-extrabold text-ellipsis whitespace-nowrap overflow-hidden text-center">
                {name}
            </h3>
            <img src={imgurl} className="w-full h-3/4 object-contain" />
            <div className="p-4 bg-white flex justify-between">
                <h1 className="font-bold">
                    {position}
                </h1>
                <h1 className="text-gray-600">
                    {price}
                </h1>
                <button onClick={onAddToMyTeam}>
                    <img src="https://cdn-icons-png.flaticon.com/128/5445/5445020.png" className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default Card;