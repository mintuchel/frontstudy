import React, { useState } from 'react';

import Nav from '../component/nav';
import Card from '../component/card';
import MyTeam from '../component/myteam';

interface CardProps {
    imgurl: string;
    name: string;
    price: string;
    position: string;
}

const Players = () => {

    // setMyTeam이 호출되면 myTeam을 업데이트하고 렌더링해라
    const [myTeam, setMyTeam] = useState<CardProps[]>([]);

    // CardProp이라는 객체를 받음
    // React에는 list.add 같은게 없다. 왜 없는지는 의문이다
    const addToMyTeam = (player: CardProps) => {
        // 이미 추가된 플레이어는 중복으로 추가되지 않도록 처리. 새 배열 생성해서 업데이트
        if (!myTeam.some((p) => p.name === player.name)) {
            setMyTeam((prevTeam) => [...prevTeam, player]);
        }
    };

    const deleteFromMyTeam = (player: CardProps) => {
        // 주어진 player의 이름과 일치하지 않는 플레이어들로 새로운 배열을 생성하여 업데이트
        setMyTeam((prevTeam) => prevTeam.filter((p) => p.name !== player.name));
    };


    // setBoxData가 호출되면 boxData가 렌더링 되어야하니 업데이트해라
    const [cardData, setCardData] = useState([
        { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p247632.png", name: "pedro neto", price: "$69m", position: "LW" },
        { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p248857.png", name: "madueke", price: "$45m", position: "RW" },
        { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p486672.png", name: "moises caicedo", price: "$117m", position: "CDM" },
        { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p215413.png", name: "dewsbury-hall", price: "$43m", position: "CM" },
        { imgurl: "https://media.futbolfantasy.com/thumb/400x400/v202408200059/uploads/images/jugadores/ficha/8871.png", name: "mudryk", price: "$55m", position: "LW" },
    ]);

    const handleNavClick = (category: string) => {
        if (category === 'Chelsea') {
            setCardData([
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p247632.png", name: "pedro neto", price: "$69m", position: "LW" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p248857.png", name: "madueke", price: "$45m", position: "RW" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p486672.png", name: "moises caicedo", price: "$117m", position: "CDM" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p215413.png", name: "dewsbury-hall", price: "$43m", position: "CM" },
                { imgurl: "https://media.futbolfantasy.com/thumb/400x400/v202408200059/uploads/images/jugadores/ficha/8871.png", name: "mudryk", price: "$55m", position: "LW" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p514356.png", name: "lavia", price: "$62m", position: "CDM" },
            ]);
        } else if (category === 'ManCity') {
            setCardData([
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p248875.png", name: "jeremy doku", price: "$96m", position: "LW" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p91651.png", name: "kovacic", price: "$48m", position: "CM" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p211975.png", name: "akanji", price: "$69m", position: "CB" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p465351.png", name: "matheus nunes", price: "$71m", position: "CDM" },
            ]);
        } else if (category === 'NewCastle') {
            setCardData([
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p232826.png", name: "anthony gordon", price: "$81m", position: "LW" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p119471.png", name: "fabian schar", price: "$21m", position: "CB" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p208706.png", name: "bruno guimaraes", price: "$124m", position: "CM" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p114243.png", name: "jacob murphy", price: "$25m", position: "RW" },
            ]);
        } else if (category === 'Wolverhampton') {
            setCardData([
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p247412.png", name: "larsen", price: "$23m", position: "ST" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p184754.png", name: "hwang", price: "$38m", position: "RW" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p430871.png", name: "matheus cunha", price: "$55m", position: "LM" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p151086.png", name: "mario lemina", price: "$21m", position: "CM" },
            ]);
        } else if (category === 'Liverpool') {
            setCardData([
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p447203.png", name: "darwin nunez", price: "$110m", position: "ST" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png", name: "van dijk", price: "$48m", position: "CB" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p424876.png", name: "dominik szoboszlai", price: "$110m", position: "CM" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p243016.png", name: "macallister", price: "$96m", position: "CM" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p243298.png", name: "cody gakpo", price: "$76m", position: "LW" },
            ]);
        } else if (category === 'Brighton') {
            setCardData([
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p451340.png", name: "mitoma", price: "$69m", position: "LW" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p487117.png", name: "ferguson", price: "$76m", position: "ST" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p474120.png", name: "enciso", price: "$37m", position: "CAM" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p204214.png", name: "estupinan", price: "$48m", position: "LWB" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p535818.png", name: "adingra", price: "$39m", position: "LW" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p109345.png", name: "solly march", price: "$32m", position: "RW" },
            ]);
        } else if (category === 'AstonVilla') {
            setCardData([
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p449871.png", name: "amadu onana", price: "$76m", position: "CDM" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p178301.png", name: "ollie watkins", price: "$96m", position: "ST" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p101188.png", name: "digne", price: "$22m", position: "LB" },
                { imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p122806.png", name: "john mcginn", price: "$34m", position: "CM" },
            ]);
        }
    };

    return (
        <div className="max-w-full h-[78.2vh] flex">
            {/* Nav에게 handleNavClick 콜백함수 전달 */}
            <Nav onNavClick={handleNavClick} />

            <section className="flex-1 grid grid-cols-4 grid-rows-2 gap-5 border-[3px] border-black">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imgurl={card.imgurl}
                        name={card.name}
                        price={card.price}
                        position={card.position}
                        onAddToMyTeam={() => addToMyTeam(card)}
                    />
                ))}
            </section>

            <section className="flex-1 grid grid-cols-4 grid-rows-2 gap-5 mx-2">
                {myTeam.map((card, index) => (
                    <Card
                        key={index}
                        imgurl={card.imgurl}
                        name={card.name}
                        price={card.price}
                        position={card.position}
                        onAddToMyTeam={() => deleteFromMyTeam(card)}
                    />
                ))}
            </section>
        </div>
    )
};

export default Players;