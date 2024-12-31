import { format } from "date-fns";
import { useLoaderData, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const UpdateFood = () => {
  const updateData = useLoaderData();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const expiredDate = form.expiredDate.value;
    const status = form.status.value;
    const donatorEmail = form.donatorEmail.value;
    const donatorPhoto = form.donatorPhoto.value;
    const donatorName = form.donatorName.value;
    const notes = form.notes.value;
    const collectedData = {
      name,
      photo,
      quantity,
      location,
      expiredDate,
      status,
      donatorEmail,
      donatorName,
      donatorPhoto,
      notes,
    };

    // update food
    await axiosSecure.put(`/update-food/${updateData._id}`, collectedData);
    navigate("/manage-myFoods");
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="min-h-screen flex items-center justify-center my-5">
        <form
          onSubmit={handleUpdate}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg border border-orange-200"
        >
          <h1 className="text-3xl font-bold text-orange-600 mb-6 text-center">
            Donation Details
          </h1>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              name="name"
              type="text"
              defaultValue={updateData.name}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Photo */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Photo
            </label>
            <input
              name="photo"
              type="text"
              defaultValue={updateData.photo}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Quantity
            </label>
            <input
              name="quantity"
              type="text"
              defaultValue={updateData.quantity}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Location
            </label>
            <input
              name="location"
              type="text"
              defaultValue={updateData.location}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Expired Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Expiry Date
            </label>
            <input
              name="expiredDate"
              type="text"
              defaultValue={format(new Date(updateData.expiredDate), "P")}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Status
            </label>
            <input
              name="status"
              type="text"
              defaultValue={updateData.status}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>

          <h2 className="text-2xl font-bold text-orange-600 mt-6 mb-4 text-center">
            Donator Details
          </h2>

          {/* Donator Details */}
          <div className="flex flex-col gap-4 mb-4">
            {/* Donator Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Donator Email
              </label>
              <input
                name="donatorEmail"
                type="email"
                defaultValue={updateData.donator?.donatorEmail}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Donator Photo */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Donator Photo
              </label>
              <input
                name="donatorPhoto"
                type="text"
                defaultValue={updateData.donator?.donatorPhoto}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>

            {/* Donator Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Donator Name
              </label>
              <input
                name="donatorName"
                type="text"
                defaultValue={updateData.donator?.donatorName}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Notes
            </label>
            <textarea
              name="notes"
              defaultValue={updateData.notes}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
