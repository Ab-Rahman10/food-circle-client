import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/Context";
import toast from "react-hot-toast";
import { compareAsc, format } from "date-fns";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddFood = () => {
  const axiosSecure = UseAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  const navigate = useNavigate();

  // Tanstack mutation
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (addData) => {
      await axiosSecure.post(`/foods`, addData);
    },
    onSuccess: () => {
      toast.success("Your food has been successfully added!");
      navigate("/available-foods");
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
  });

  const handleFoodSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.foodName.value;
    const photo = form.foodPhoto.value;
    const quantity = form.foodQuantity.value;
    const location = form.location.value;
    const expiredDate = startDate;
    const notes = form.notes.value;
    const donatorEmail = form.donatorEmail.value;

    const donatorName = user?.displayName;
    const donatorPhoto = user?.photoURL;

    const addData = {
      name,
      photo,
      quantity,
      location,
      expiredDate,
      notes,
      donator: { donatorName, donatorEmail, donatorPhoto },
      status: "available",
    };

    // validation the expire date
    const result = compareAsc(new Date(), new Date(startDate));
    if (result === 1) {
      return toast.error("The expiration date must be in the future.");
    }

    try {
      await mutateAsync(addData);
    } catch (err) {
      // console.log("ERROR", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-orange-500 mb-6 text-center">
        Add Food
      </h2>
      <form onSubmit={handleFoodSubmit} className="space-y-6">
        {/* Food Details Section */}
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Food Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700">Food Name</label>
              <input
                name="foodName"
                type="text"
                placeholder="Enter food name"
                required
                className="mt-1 w-full px-3 py-2 border rounded focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Food Image</label>
              <input
                name="foodPhoto"
                type="url"
                placeholder="Image URL"
                required
                className="mt-1 w-full px-3 py-2 border rounded focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Quantity</label>
              <input
                name="foodQuantity"
                type="number"
                placeholder="Quantity"
                required
                className="mt-1 w-full px-3 py-2 border rounded focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Donator Email
              </label>
              <input
                readOnly
                defaultValue={user?.email}
                name="donatorEmail"
                type="email"
                placeholder="Enter donator email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Pickup Details Section */}
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Pickup Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700">
                Pickup Location
              </label>
              <input
                name="location"
                type="text"
                placeholder="Enter pickup location"
                required
                className="mt-1 w-full px-3 py-2 border rounded focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Expiration Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(format(new Date(date), "P"))}
                required
                className="mt-1 w-full px-3 py-2 border rounded focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="p-4 border rounded-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Additional Info
          </h3>
          <label className="block text-sm text-gray-700">Notes</label>
          <textarea
            name="notes"
            placeholder="Add any additional notes"
            required
            className="mt-1 w-full px-3 py-2 border rounded focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-5 py-2 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            {isPending ? "Save..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
