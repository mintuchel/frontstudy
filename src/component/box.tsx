import React from 'react';

// PlayerProp 정의하기
interface PlayerProps {
    imgurl: string,
    name: string;
    price: string;
    position: string;
}

// w-full = 이미지를 부모 요소의 전체 너비에 맞추기
// min-h-fit = 이미지의 최소 높이를 부모요소
// object-contain = 해당 사이즈에 맞게 이미지 축소
// justify-between = 자식 컴포넌트를 똑같은 간격으로 배치함

// Box는 PlayerProp을 전달받고 그 중 imgurl, name, price를 추출해 사용하겠다
const Box: React.FC<PlayerProps> = ({ imgurl, name, price, position }) => {
    return (
        <div className="rounded-2xl overflow-hidden border-[3px] border-black h-full">
            <h3 className="font-extrabold text-ellipsis whitespace-nowrap overflow-hidden text-center">
                {name}
            </h3>
            <img src={imgurl} className="w-full h-3/4 object-contain" />
            <div className="p-4 bg-white flex justify-between">
                <h1>
                    {position}
                </h1>
                <h1 className="text-gray-600">
                    {price}
                </h1>
                <button>
                    <img src="https://cdn-icons-png.flaticon.com/128/5445/5445020.png" className="h-8 w-8" />
                </button>
            </div>
        </div>
    );
};

export default Box;