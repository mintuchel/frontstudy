import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Container from 'postcss/lib/container';

const Home = () => {

    const [imgIdx, setImage] = useState(0);

    const rightClicked = () => setImage((imgIdx + 1) % 4)
    const leftClicked = () => setImage((imgIdx + 3) % 4)

    const imageList: string[] = [
        "https://e0.365dm.com/24/07/2048x1152/skysports-premier-league-season_6629191.jpg?20240717140210",
        "https://www.sportcal.com/wp-content/uploads/sites/32/2024/02/main65c65516af3e3.jpg",
        "https://wallpapers.com/images/featured/premier-league-86d2ur0b5ryesbe7.jpg",
        "https://e0.365dm.com/19/07/2048x1152/skysports-premier-league-fixtures_4709655.jpg?20190704125627",
    ]

    return (
        <div className="container max-w-full flex flex-col align-center">

            <img className="max-w-full h-[71.85vh]" src={imageList[imgIdx]} />

            <div className="bg-yellow-300 flex align-center justify-center">
                <button onClick={leftClicked} className="bg-white rounded-xl border-[2px] border-black px-2 py-2 my-2 mx-2 font-bold">
                    <img src="https://cdn-icons-png.flaticon.com/128/25/25322.png" className="h-6 w-6"></img>
                </button>
                <button onClick={rightClicked} className=" bg-white rounded-xl border-[2px] border-black px-2 py-2 my-2 mx-2 font-bold">
                    <img src="https://cdn-icons-png.flaticon.com/128/25/25638.png" className="h-6 w-6"></img>
                </button>
            </div>
        </div>
    )
};

export default Home;