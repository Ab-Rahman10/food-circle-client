import axios from "axios";
import { Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";

const FeaturedFoods = () => {
  // Using Tanstack query---------------------------------------------
  const { data: featuredFoods, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-foods`
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );
  }

  return (
    <div className="w-11/12   lg:w-9/12 mx-auto">
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center ">Featured foods</h2>
        <p className="text-center text-sm mt-2 text-gray-500">
          Discover our curated selection of featured foods, handpicked for their
          quality, flavor, and freshness. <br className="hidden lg:block" />{" "}
          Treat yourself to these exceptional items and savor every bite!
        </p>
      </div>
      <hr className="my-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredFoods.map((food) => (
          <div
            key={food._id}
            className="mx-auto bg-white shadow-lg rounded-xl overflow-hidden pb-2 "
          >
            <div className="w-full relative">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                src={food.photo}
                alt="Image"
              />
              <div className="bg-orange-500 absolute right-0 top-4 rounded-tl-md rounded-bl-md p-2 text-white text-xs">
                <p className="text-xs font-semibold">
                  Quantity: {food.quantity}
                </p>
              </div>
              <div className="absolute top-[86%] left-[2%] bg-white py-0.5 px-3 rounded-sm text-sm font-semibold flex items-center gap-2">
                <GiForkKnifeSpoon className="bg-custom-orange text-white text-lg" />{" "}
                {food.name}
              </div>
            </div>
            <div className="px-2">
              <div className="flex justify-between items-center mt-3">
                <span className="text-sm text-green-500 bg-green-500/20 py-0.5 px-1.5 rounded-md">
                  {food.status}
                </span>
                <Link to={`/food-details/${food._id}`}>
                  <button className="py-1 px-2 text-sm bg-orange-500 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 ">
                    View details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/available-foods"
        className="order-2 lg:order-1 flex justify-center mt-3"
      >
        <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 flex items-center">
          Available foods <BsArrowRight className="ml-2" />
        </button>
      </Link>
    </div>
  );
};

export default FeaturedFoods;
