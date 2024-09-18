import React, { useEffect, useState } from 'react';

const backgrounds = [
    'https://mrwallpaper.com/images/hd/uefa-champions-league-star-football-logo-8dv90jbvwwhzp9c0.jpg',
    'https://i.redd.it/b10brark3g031.png',
    'https://cdn.wallpapersafari.com/65/46/EeRgv2.jpg',
];

const SignUp = () => {

    // setBackground 함수가 호출되면 index 렌더링해라
    const [index, updateBackgroundIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section
            className="max-w-full h-[78.2vh] flex justify-center items-center overflow-hidden rounded-lg bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${backgrounds[index]})`
            }}
        >
            <main className="flex p-4 justify-center border-[5px] border-white rounded-2xl">
                <form className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            className="w-64 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            id="password"
                            name="password"
                            placeholder="password"
                            className="w-64 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            id="nickname"
                            name="nickname"
                            placeholder="nickname"
                            className="w-64 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            id="phonenumber"
                            name="phonenumber"
                            placeholder="phonenumber"
                            className="w-64 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>
            </main>
        </section >
    );
};

export default SignUp;