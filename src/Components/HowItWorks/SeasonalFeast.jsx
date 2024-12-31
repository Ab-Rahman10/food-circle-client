import React from "react";
import { Link } from "react-router-dom";

const SeasonalFeast = () => {
  // Sample data for seasonal dishes
  const featuredDishes = [
    {
      id: 1,
      name: "Spicy Autumn Chili",
      description:
        "A warm and comforting chili with seasonal spices, perfect for chilly nights.",
      image: "https://i.ibb.co.com/TLFrBWg/pexels-photo-958545.jpg",
      status: "Trending",
    },
    {
      id: 2,
      name: "Maple-Glazed Chicken",
      description:
        "Juicy chicken with a sweet maple glaze, perfect for a cozy dinner.",
      image: "https://i.ibb.co.com/bzj1Dh9/pexels-photo-12737808.jpg",
      status: "New",
    },
    {
      id: 3,
      name: "Pumpkin Risotto",
      description: "A creamy pumpkin risotto that's full of autumn flavors.",
      image: "https://i.ibb.co.com/W5Sstrm/pexels-photo-9792458.jpg",
      status: "Seasonal",
    },
  ];

  return (
    <section className="seasonal-feast py-12 bg-gradient-to-tr from-white via-orange-100">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Seasonal Feast: What's Fresh & Trending
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Explore the flavors of the season! Discover fresh ingredients,
            trending dishes, and seasonal specials picked just for you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="dish-card bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-all duration-200"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {dish.description}
                  </p>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-700 transition">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/available-foods">
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-700 transition">
                Explore Available Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalFeast;
