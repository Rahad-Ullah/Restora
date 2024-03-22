import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Recipes from "../Recipes/Recipes";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Recipes/>
        </div>
    );
};

export default Home;