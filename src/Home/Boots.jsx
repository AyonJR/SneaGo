import { useEffect, useState } from "react";
import axios from "axios";

const Boots = () => {
  const [boots, setBoots] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("Nike"); // Default to 'Nike'

  useEffect(() => {
    axios
      .get("http://localhost:5000/boots")
      .then((res) => {
        setBoots(res.data);
      });
  }, []);

  const filterBootsByBrand = (brand) => {
    return boots.filter((boot) => boot.brand === brand);
  };

  const brands = [
    {
      name: "Nike",
      logo: "https://i.ibb.co/Jd32K6W/nike-logo-white-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-f.png",
    },
    {
      name: "Adidas",
      logo: "https://i.ibb.co/GQFJpgJ/adidas-logo-white-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-black-bac.png",
    },
    {
      name: "Puma",
      logo: "https://i.ibb.co/8cw6r97/images-5-removebg-preview.png",
    },
  ];

  return (
    <div>
      <div className="lg:ml-20">
        <p className="text-white custom-font-body text-3xl font-normal">
          Available
          <span className="font-semibold text-blue-600"> Boots</span>
        </p>
        <p className="text-white font-light custom-font-body">
          Our store is more than just another average online retailer. We sell
          not only top quality products, but give our customers a positive
          online shopping experience.
        </p>
      </div>

      {/* Brand Tabs */}
      <div className="flex mt-5 items-center space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => setSelectedBrand(brand.name)}
            className={`flex items-center flex-shrink-0 px-5 pt-2 border-b-4 ${
              selectedBrand === brand.name ? "border-blue-600" : "border-transparent"
            }`}
          >
            <img className="w-16" src={brand.logo} alt={`${brand.name} logo`} />
          </button>
        ))}
      </div>

      {/* Display Boots */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {filterBootsByBrand(selectedBrand).map((boot) => (
          <div
            key={boot._id}
            className="bg-transparent p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              className="w-32 h-32 object-contain"
              src={boot.image}
              alt={boot.name}
            />
            <h2 className="text-lg text-white font-semibold mt-2">{boot.name}</h2>
            <p className="text-blue-600 font-bold">${boot.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boots;
