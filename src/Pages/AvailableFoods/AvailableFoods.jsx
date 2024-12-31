import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../../Components/Slider/FoodCard/FoodCard";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { IoGridSharp } from "react-icons/io5";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [gridView, setGridView] = useState(true);

  useEffect(() => {
    const fetchingAvailableFoods = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/foods?search=${search}&sort=${sort}`
        );
        setFoods(data);
      } catch (err) {
        // console.log(err.message);
      }
    };

    fetchingAvailableFoods();
  }, [search, sort]);

  const handleReset = () => {
    setSearch("");
    setSort("");
  };
  return (
    <div className="w-11/12   lg:w-9/12 mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-center mt-10">
          Available Foods
        </h2>
        <p className="text-center text-sm mt-2 text-gray-500">
          Explore a variety of available food items ready for donation. Choose
          from a wide range of options <br className="hidden lg:block" /> to
          help others in need. Your contribution makes a difference!
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col lg:flex-row md:justify-between md:items-center gap-5 p-5 rounded-lg shadow-md">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Search & Sort by Expire Date
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full md:w-auto">
          {/* Search */}
          <label className="input input-bordered flex items-center gap-2 rounded-lg shadow-md p-2 w-full max-w-sm mx-auto">
            <input
              onBlur={(e) => setSearch(e.target.value)}
              type="text"
              className="grow px-4 py-2 rounded-lg border-gray-300 focus:outline-none  focus:border-transparent"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 cursor-pointer opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {/* Sort */}
          <select
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="">Sort by Expire Date</option>
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
          {/* Reset */}
          <div className="flex gap-2 items-center">
            <button
              onClick={handleReset}
              className="btn bg-custom-orange text-white hover:bg-orange-700 px-4 py-2 rounded-md"
            >
              Reset
            </button>
            <div className="hidden lg:block">
              {gridView ? (
                <button
                  className="font-semibold bg-custom-orange text-white p-2 rounded-md flex items-center gap-2"
                  onClick={() => setGridView(!gridView)}
                >
                  <TfiLayoutGrid3Alt className="text-3xl" /> Grid
                </button>
              ) : (
                <button
                  className="font-semibold bg-custom-orange text-white p-2 rounded-md flex items-center gap-2"
                  onClick={() => setGridView(!gridView)}
                >
                  <IoGridSharp className="text-3xl inline-flex" /> Grid
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Foods Grid */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          gridView ? "lg:grid-cols-3" : "lg:grid-cols-2"
        } gap-5`}
      >
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
