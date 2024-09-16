import Header from "./component/header";
import Section from "./component/section";
import Footer from "./component/footer";
import { Routes, Route } from "react-router-dom";
import Players from "./page/players";
import Home from "./page/home";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <Section />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/players" element={<Players />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;