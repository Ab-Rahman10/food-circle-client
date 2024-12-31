import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { BsArrowLeft } from "react-icons/bs";
import axios from "axios";
import useAuth from "../../Hooks/Context";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import toast from "react-hot-toast";

const FoodDetails = () => {
  const axiosSecure = UseAxiosSecure();
  const foodDetails = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    _id,
    name,
    photo,
    quantity,
    location,
    expiredDate,
    status,
    donator,
    notes,
  } = foodDetails;

  const handleOpenModal = async (id) => {
    // get data from details to dialog box
    // await axios.get(`${import.meta.env.VITE_API_URL}/food/${id}`);

    document.getElementById("my_modal_5").showModal();
  };

  const handleRequest = async (e) => {
    e.preventDefault();

    photo;
    const donarName = donator?.donatorName;
    const pickupLocation = location;
    expiredDate;
    const requestDate = e.target.requestDate.value;
    const note = e.target.notes.value;
    const userEmail = user?.email;
    const reqData = {
      photo,
      donarName,
      pickupLocation,
      expiredDate,
      requestDate,
      note,
      userEmail,
    };

    try {
      // send data to server
      await axiosSecure.post(`/food-request`, reqData);

      await axiosSecure.patch(`/requestFoods/${_id}`, {
        status: "Requested",
      });

      // close the modal
      document.getElementById("my_modal_5").close();
      navigate("/myFood-request");
      toast.success("Requested");
    } catch (err) {
      // console.log("Request Error", err);
    }
  };

  return (
    <div className="flex flex-col items-center lg:w-9/12 mx-auto px-4 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row gap-5">
      {/* Food Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden order-1 lg:order-2">
        {/* Image Section */}
        <div className="h-56">
          <img src={photo} alt="Food" className="w-full h-full object-cover" />
        </div>

        {/* Details Section */}
        <div className="p-6">
          {/* Title and Status */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-orange-500">{name}</h2>
            <span className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-sm font-semibold">
              {status}
            </span>
          </div>

          {/* Notes */}
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">Notes:</span> {notes}
          </p>

          {/* Additional Info */}
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Quantity:</span>{" "}
              {parseInt(quantity)}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Expires:</span>{" "}
              {format(new Date(expiredDate), "P")}
            </p>
          </div>

          {/* Donator Info */}
          <div className="mt-6 flex items-center">
            <img
              src={donator?.donatorPhoto}
              alt="Donator"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-gray-700 font-semibold">
                {donator?.donatorName}
              </p>
              <p className="text-sm text-gray-500">{donator?.donatorEmail}</p>
            </div>
          </div>

          {/* Request Button */}
          <div className="mt-6">
            <button
              onClick={() => handleOpenModal(_id)}
              className="w-full px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Request
            </button>
          </div>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-4 text-center text-custom-orange">
                Request Food
              </h3>
              <form onSubmit={handleRequest} className="w-full">
                {/* Food Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Food name
                  </label>
                  <input
                    type="text"
                    value={name}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Food Image */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Food Image
                  </label>
                  <img
                    src={photo}
                    alt="Food"
                    className="w-full h-32 object-cover rounded-md border border-gray-300"
                  />
                </div>
                {/* Food Donator Email */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Donator Email
                  </label>
                  <input
                    type="email"
                    value={donator?.donatorEmail}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Food Donator Name */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Donator Name
                  </label>
                  <input
                    type="text"
                    value={donator?.donatorName}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* User Email */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Request Date */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Request Date
                  </label>
                  <input
                    name="requestDate"
                    type="text"
                    value={format(new Date(), "P")}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Pickup Location */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Expire Date */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expire Date
                  </label>
                  <input
                    type="text"
                    value={format(new Date(expiredDate), "P")}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* Additional Notes */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    required
                    name="notes"
                    placeholder="Add any additional notes here..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  ></textarea>
                </div>
                {/* Modal Action Buttons */}
                <div className="modal-action">
                  {/* Request Button */}
                  <button
                    className="bg-custom-orange py-2 px-5 rounded-md text-white"
                    type="submit"
                  >
                    Request
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>

      {/* Go Back Button */}
      <Link to="/available-foods" className="order-2 lg:order-1">
        <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 flex items-center">
          <BsArrowLeft className="mr-2" /> Go back to Available foods
        </button>
      </Link>
    </div>
  );
};

export default FoodDetails;
