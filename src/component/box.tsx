import React from 'react';

const Box = () => {
    return (
        <div className="rounded-2xl overflow-hidden border-[3px] border-black">
            <img
                src="https://picsum.photos/200"
                className="w-full h-[20vh] object-cover"
            />
            <div className="p-4 bg-white">
                <header className="mb-2">
                    <h3 className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                        css 1줄 없이 예쁜 사이트 만들기
                    </h3>
                </header>
                <p className="text-gray-600 text-sm">
                    안녕하세요! 오늘은 새로운 라이브러리를 소개해드릴까합니다!
                </p>
            </div>
        </div>
    );
};

export default Box;