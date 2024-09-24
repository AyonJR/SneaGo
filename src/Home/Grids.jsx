import React from "react";

const Grids = () => {
  return (
    <div className="flex gap-3 custom-font-body w-full">
      <div className="relative w-1/3 h-[300px]">
        <img
          className="object-cover h-full w-full"
          src="https://i.ibb.co/ZXJzPj7/jeff-tumale-SD9-Jyl1x-NQ4-unsplash.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">Nike Force 1</h2>
        </div>
      </div>

      <div className="w-1/3 grid grid-rows-2 h-[300px]">
        <div className="relative h-[150px]">
          <img
            className="object-cover h-full w-full"
            src="https://i.ibb.co/SwHH8Rg/jordan-andrews-A5-EUGGHqs4-A-unsplash-1.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-lg font-bold">Chuck Tailor 2</h2>
          </div>
        </div>
        <div className="relative h-[150px] overflow-hidden">
          <img
            className="object-cover h-full w-full"
            src="https://i.ibb.co/0Yt1kn4/dominik-martin-b2-f-BVrfx0o-unsplash.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-lg font-bold">Adidas Forum</h2>
          </div>
        </div>
      </div>

      <div className="relative w-1/3 h-[300px]">
        <img
          className="object-cover h-full w-full"
          src="https://i.ibb.co/mDbmhH6/amirhossein-hasani-3-MLjh-MAJm-Y-unsplash.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">Adidas Samba OG</h2>
        </div>
      </div>
    </div>
  );
};

export default Grids;
