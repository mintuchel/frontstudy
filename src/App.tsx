import Header from "./component/header";
import Section from "./component/section";
import Box from "./component/box";
import Nav from "./component/nav";
import Footer from "./component/footer";

const App = () => {
    return(
        <div className="min-h-screen bg-gray-100">
            <Header/>
            <Section/>
            <div className="container max-w-full flex">
                <Nav/>
                <main className="w-5/6">
                <section className="p-5 border-[3px] border-black">
                    <div className="grid grid-cols-4 gap-5">
                    <Box name="에코프로" price="₩100,000" />
                            <Box name="삼성전자" price="₩80,000" />
                            <Box name="카카오" price="₩150,000" />
                            <Box name="네이버" price="₩120,000" />
                            <Box name="에코프로" price="₩100,000" />
                            <Box name="삼성전자" price="₩80,000" />
                            <Box name="카카오" price="₩150,000" />
                            <Box name="네이버" price="₩120,000" />
                    </div>
                </section>
                </main>
            </div>
            <Footer/>
        </div>
    )
};

export default App;