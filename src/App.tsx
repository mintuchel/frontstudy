import React, {useState} from 'react';

import Header from "./component/header";
import Section from "./component/section";
import Box from "./component/box";
import Nav from "./component/nav";
import Footer from "./component/footer";

const App = () => {

    // setBoxData가 호출되면 boxData가 렌더링 되어야하니 업데이트해라
    const [boxData, setBoxData] = useState([
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p247632.png", name:"pedro neto", price:"$69m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p248857.png", name: "madueke", price: "$45m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p486672.png", name:"moises caicedo", price:"$117m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p215413.png", name:"dewsbury-hall", price:"$43m"},
            ]);

    const handleNavClick = (category:string) => {
        if(category === 'Chelsea'){
            setBoxData([
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p247632.png", name:"pedro neto", price:"$69m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p248857.png", name: "madueke", price: "$45m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p486672.png", name:"moises caicedo", price:"$117m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p215413.png", name:"dewsbury-hall", price:"$43m"},
            ]);
        }else if(category === 'ManCity'){
            setBoxData([
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p248875.png", name: "jeremy doku", price: "$96m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p91651.png", name: "kovacic", price: "$48m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p211975.png", name: "akanji", price: "$69m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p465351.png", name: "matheus nunes", price: "$71m"},
            ]);
        }else if(category === 'NewCastle'){
            setBoxData([
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p232826.png", name: "anthony gordon", price:"$81m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p119471.png", name: "fabian schar", price: "$21m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p208706.png", name: "bruno guimaraes", price:"$124m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p114243.png", name: "jacob murphy", price:"$25m"}
            ]);
        }else if(category === 'Wolverhampton'){
            setBoxData([
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p247412.png", name: "larsen", price:"$23m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p184754.png", name: "hwang", price: "$38m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p430871.png", name: "matheus cunha", price:"$55m"},
                {imgurl: "https://resources.premierleague.com/premierleague/photos/players/250x250/p151086.png", name:"mario lemina", price:"$21m"},
            ]);
        }
    };

    return(
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <Section/>
            <div className="container max-w-full flex">
                {/* passing the handleNavClick callback-function to Nav Component */}
                <Nav onNavClick={handleNavClick}/>
                <main className="w-5/6">
                <section className="p-5 border-[3px] border-black">
                    <div className="grid grid-cols-4 gap-5">
                        {boxData.map((box, index) => (
                            <Box key={index} imgurl = {box.imgurl} name={box.name} price={box.price} />
                        ))}
                    </div>
                </section>
                </main>
            </div>
            <Footer/>
        </div>
    )
};

export default App;