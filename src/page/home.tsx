import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-full">
            <h1>This is Home</h1>
            <Link to="/players">Ones To Watch</Link>
        </div>
    )
};

export default Home;