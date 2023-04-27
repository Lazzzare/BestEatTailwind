import { data } from "../data/data.js";

const Food = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filters Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              All
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Burgers
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Pizza
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Salads
            </button>
            <button className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p>Filter Price</p>
          <button>$</button>
          <button>$$</button>
          <button>$$$</button>
          <button>$$$$</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
