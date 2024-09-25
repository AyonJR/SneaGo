const Boots = () => {
  return (
    <div>
        <div className="lg:ml-20">
        <p className="text-white custom-font-body   text-3xl font-normal ">
          Available
          <span className="font-semibold text-blue-600 "> Boots</span>
        </p>
        <p className="text-white font-light custom-font-body">
          Our store is more than just another average online retailer. We sell
          not only top quality products, but give our customers a positive
          online shopping experience.
        </p>
      </div>
      {/* Boots */}
      <div className="flex mt-5 items-center space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap ">
        <button
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 pt-2 border-b-4 dark:border-blue-600 dark:text-white"
        >
          <img className="w-16" src="https://i.ibb.co.com/GQFJpgJ/adidas-logo-white-symbol-with-name-clothes-design-icon-abstract-football-illustration-with-black-bac.png" alt="" />
        </button>
        <button
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 pt-2 border-b-4 dark:border-blue-600 dark:text-white"
        >
          <img className="w-16" src="https://i.ibb.co.com/Jd32K6W/nike-logo-white-with-name-clothes-design-icon-abstract-football-illustration-with-black-background-f.png" alt="" />
        </button>
        <button
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 pt-2 border-b-4 dark:border-blue-600 dark:text-white"
        >
          <img className="w-16" src="https://i.ibb.co.com/8cw6r97/images-5-removebg-preview.png" alt="" />
        </button>
       
      </div>
    </div>
  );
};

export default Boots;
