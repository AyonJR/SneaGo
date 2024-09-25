import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import axios from "axios";

const ForWomen = () => {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/forWomen").then((res) => {
      setArrivals(res.data);
    });
  }, []);

  console.log(arrivals);

  return (
    <div>
      <div className="lg:ml-20">
        <p className="text-white custom-font-body   text-3xl font-normal ">
          For
          <span className="font-semibold text-blue-600 "> Women</span>
        </p>
        <p className="text-white font-light custom-font-body">
          Our store is more than just another average online retailer. We sell
          not only top quality products, but give our customers a positive
          online shopping experience.
        </p>
      </div>
      <div className="flex gap-10 mt-5">
        <div className="mt-5 w-3/4 ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {arrivals.map((arrival) => (
              <SwiperSlide
                key={arrival._id}
                className="h-auto w-[300px] bg-transparent rounded-lg shadow-md p-4 flex flex-col "
              >
                <img
                  className="object-cover w-full h-40 rounded-md"
                  src={arrival.image}
                  alt="Nature 3"
                />
                <div className="flex justify-start">
                  <h2 className="mt-4 text-lg text-white font-bold">
                    {arrival.name}
                  </h2>
                </div>
                <div className="">
                  <p className="text-sm text-blue-600 font-semibold mt-2">
                    Just In
                  </p>

                  <p className="text-sm text-white mt-2">Color: 1</p>

                  <p className="text-lg font-semibold text-white mt-4">
                    $ {arrival.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative rounded-lg flex-1">
  {/* Use <img> for GIF */}
  <img src="/discount-video.gif" alt="Discount Gif" className="h-[350px] object-cover w-full" />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-20" />

  {/* Centered text */}
  <div className="absolute inset-0 flex items-center justify-center">
    {/* <h1 className="text-white text-2xl custom-font-body font-normal">
         <span className="text-blue-600">20%</span> OFF
     </h1> */}
  </div>
</div>

      </div>
    </div>
  );
};

export default ForWomen;
