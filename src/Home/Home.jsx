import Advertise from "./Advertise";
import Banner from "./Banner";
import Grids from "./Grids";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-5">
              <Advertise></Advertise>
            </div>
            <div className="mt-5">
                <Grids></Grids>
            </div>
        </div>
    );
};

export default Home;