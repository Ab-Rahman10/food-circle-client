import { format } from "date-fns";
import React from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  return (
    <div className="mx-auto bg-white shadow-lg rounded-xl overflow-hidden pb-2 ">
      <div className="w-full relative">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
          src={food.photo}
          alt="Image"
        />
        <div className="bg-orange-500 absolute right-0 top-4 rounded-tl-md rounded-bl-md p-2 text-white text-xs">
          <p className="text-xs font-semibold">
            Expire Date: {format(new Date(food.expiredDate), "P")}
          </p>
        </div>
        <div className="absolute top-[86%] left-[2%] bg-white py-0.5 px-3 rounded-sm text-sm font-semibold flex items-center gap-2">
          <GiForkKnifeSpoon className="bg-custom-orange text-white text-lg" />{" "}
          {food.name}
        </div>
      </div>
      <div className="px-2">
        <p className="text-gray-600 text-sm pt-2 md:h-[50px]">
          {food.notes.slice(0, 50)}...
        </p>
        <hr className="my-2 flex-grow" />
        <div className="flex justify-between items-center">
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
  );
};

export default FoodCard;
