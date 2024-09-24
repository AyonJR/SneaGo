import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="w-full h-[80vh]">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showArrows={true}
        interval={2000}
      >
        <div className="relative h-[80vh] w-full">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co.com/KGCzWsW/grailify-1-Ick-e2ozj-I-unsplash.jpg"
            alt="Banner 1"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
        </div>

        <div className="relative h-[80vh] w-full">
          <img
            className="w-full h-full object-cover"
            src="https://i.postimg.cc/DwKtTBvN/fachry-zella-devandra-b-NSd-Ik-CBJOs-unsplash.jpg"
            alt="Banner 2"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
        </div>

        <div className="relative h-[80vh] w-full">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co/XWPWmrH/alexander-rotker-l8p1a-WZq-Hv-E-unsplash.jpg"
            alt="Banner 3"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90"></div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
