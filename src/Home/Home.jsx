import Advertise from "./Advertise";
import Banner from "./Banner";
import Boots from "./Boots";
import Featued from "./Featued";
import ForWomen from "./ForWomen";
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
            <div className="mt-10">
                <Featued></Featued>
            </div>
            <div className="mt-10">
                <ForWomen></ForWomen>
            </div>
           <div className="mt-10">
            <Boots></Boots>
           </div>
        </div>
    );
};

export default Home;