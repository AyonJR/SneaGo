import Advertise from "./Advertise";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-5">
              <Advertise></Advertise>
            </div>
        </div>
    );
};

export default Home;