import Hamburger from './hamburger';

const Header = () => {
    return (
        <header className="bg-red-500 py-4">
            <div className="container mx-auto px-5 flex justify-center">
                <h1 className="font-bold text-xl text-black">여기가 헤더입니다</h1>
                <Hamburger />
            </div>
        </header>
    );
};

export default Header;