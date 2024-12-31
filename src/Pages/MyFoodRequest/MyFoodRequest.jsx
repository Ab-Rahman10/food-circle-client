import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/Context";
import { format } from "date-fns";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MyFoodRequest = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const currentUser = user?.email;

  // using tanstack query
  const { data: reqFoods, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-request/${currentUser}`);
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
      <div className="mt-10 mb-5">
        <h2 className="text-2xl font-bold text-center">My Requested foods</h2>
        <p className="text-center text-sm mt-2 text-gray-500">
          View all your food requests, including details like donor name, pickup
          location, and dates for easy tracking.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="text-gray-700 bg-gray-100">
              <th className="px-4 py-3 text-left"></th>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Donor Name</th>
              <th className="px-4 py-3 text-left">Pickup Location</th>
              <th className="px-4 py-3 text-left">Expire Date</th>
              <th className="px-4 py-3 text-left">Request Date</th>
            </tr>
          </thead>
          <tbody>
            {reqFoods.map((food, idx) => (
              <tr key={food._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-4">{idx + 1}</td>
                <td className="px-4 py-4 w-16 h-16">
                  <img
                    src={food.photo}
                    className="w-full h-full object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-4">{food.donarName}</td>
                <td className="px-4 py-4">{food.pickupLocation}</td>
                <td className="px-4 py-4">
                  {format(new Date(food.expiredDate), "P")}
                </td>
                <td className="px-4 py-4">{food.requestDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Go Back Button */}
      <Link to="/available-foods" className="flex justify-center mt-3">
        <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 flex items-center">
          <BsArrowLeft className="mr-2" /> Go back to Available foods
        </button>
      </Link>
    </div>
  );
};

export default MyFoodRequest;
