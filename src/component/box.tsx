import React from 'react';

// 전달받을 클래스 정의
interface PlayerProps {
    imgurl: string,
    name: string;
    price: string;
}

// PlayerProps 라는 구조체를 전달받는다는 것을 React.FC 사용해서 정의해야함
const Box: React.FC<PlayerProps> = ({ imgurl, name, price }) => {
    return (
        <div className="rounded-2xl overflow-hidden border-[3px] border-black">
            <img src={imgurl} className="w-full min-h-fit object-cover"/>
            <div className="p-4 bg-white">
                <header className="mb-2">
                    <h3 className="font-extrabold text-ellipsis whitespace-nowrap overflow-hidden">
                        {name}
                    </h3>
                </header>
                <p className="text-gray-600 text-sm">
                    {price}
                </p>
            </div>
        </div>
    );
};

export default Box;