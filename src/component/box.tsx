import React from 'react';

// PlayerProp 정의하기
interface PlayerProps {
    imgurl: string,
    name: string;
    price: string;
}

// Box는 PlayerProp을 전달받고 그 중 imgurl, name, price를 추출해 사용하겠다
const Box: React.FC<PlayerProps> = ({ imgurl, name, price }) => {
    return (
        <div className="rounded-2xl overflow-hidden border-[3px] border-black">
            <img src={imgurl} className="w-full min-h-fit object-cover" />
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