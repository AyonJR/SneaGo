import Banner from "./Home/Banner";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <div className="bg-black ">
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Home></Home>
        </div>
      </div>
    </>
  );
}

export default App;
