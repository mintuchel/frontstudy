const App = () => {
    return(
        <div className="h-screen bg-gray-100">
            <nav className="bg-red-400 py-4">
                {/* tailwind flex */}
                <div className="container mx-auto px-5 flex justify-center">
                    <h1 className="font-bold text-xl text-black">여기가 헤더입니다</h1>
                </div>
            </nav>

            <section className = "container bg-orange-400 py-5 mx-auto flex justify-center">
                <h2 className="font-bold text-lg text-black">여기는 섹션입니다</h2>
            </section>

            <div className="container bg-green-400 mx-auto">
                <section className="p-5 border-[3px] border-black">
            
                    <div className="grid grid-cols-4 gap-5">
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src="https://picsum.photos/200"
                                className="w-full h-[150px] object-cover"
                            />
                            <div className="p-4 bg=white">
                                <header className="mb-2">
                                    <h3 className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                                        css 1줄 없이 예쁜 사이트 만들기
                                    </h3>
                                </header>
                                <p className="text-gray-400 text-sm">
                                    안녕하세요! 오늘은 새로운 라이브러리를 소개해드릴까합니다!
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src="https://picsum.photos/200"
                                className="w-full h-[150px] object-cover"
                            />
                            <div className="p-4 bg=white">
                                <header className="mb-2">
                                    <h3 className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                                        css 1줄 없이 예쁜 사이트 만들기
                                    </h3>
                                </header>
                                <p className="text-gray-400 text-sm">
                                    안녕하세요! 오늘은 새로운 라이브러리를 소개해드릴까합니다!
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src="https://picsum.photos/200"
                                className="w-full h-[150px] object-cover"
                            />
                            <div className="p-4 bg=white">
                                <header className="mb-2">
                                    <h3 className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                                        css 1줄 없이 예쁜 사이트 만들기
                                    </h3>
                                </header>
                                <p className="text-gray-400 text-sm">
                                    안녕하세요! 오늘은 새로운 라이브러리를 소개해드릴까합니다!
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src="https://picsum.photos/200"
                                className="w-full h-[150px] object-cover"
                            />
                            <div className="p-4 bg=white">
                                <header className="mb-2">
                                    <h3 className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
                                        css 1줄 없이 예쁜 사이트 만들기
                                    </h3>
                                </header>
                                <p className="text-gray-400 text-sm">
                                    안녕하세요! 오늘은 새로운 라이브러리를 소개해드릴까합니다!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default App;