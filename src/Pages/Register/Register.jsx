import React, { useState } from "react";
import useAuth from "../../Hooks/Context";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import registerLottieData from "../../assets/lottie/register.json";
import Lottie from "lottie-react";

const Register = () => {
  const { setUser, createUser, googleSignIn, userProfileUpdate } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const pass = form.pass.value;

    // password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(pass)) {
      return setErrorMessage(
        "Password must be at least 6 characters long and include at least one uppercase letter and one lowercase letter."
      );
    }

    try {
      const result = await createUser(email, pass);
      // update profile
      await userProfileUpdate(name, photo);
      setUser({ ...result.user, photoURL: photo, displayName: name });
      navigate("/");
      toast.success("Account created successfully. ");
    } catch (err) {
      // console.log("ERROR", err);
      toast.error("Registration failed. Please try again later.");
    }
  };

  //   google sign in
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
      toast.success("Logged in with Google successfully. Welcome!");
    } catch (error) {
      // console.log("ERROR", error);
      toast.error("Google login failed. Please try again.");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-11/12 md:w-11/12 lg:w-9/12 mx-auto">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-orange-500">
          Register
        </h2>
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              name="photo"
              type="url"
              id="photo"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter photo URL"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              name="pass"
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
            />
            {errorMessage && (
              <span className="text-xs text-red-500">{errorMessage}</span>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>
        {/* Google Sign-In */}
        <div className="text-center">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full py-2 flex justify-center items-center border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google Logo"
              className="h-5 w-5 mr-2"
            />
            Sign in with Google
          </button>
        </div>
        <div className="text-sm text-center mt-5">
          Already have an account?{" "}
          <Link className="underline" to="/login">
            Sign In
          </Link>
        </div>
      </div>
      <div className="hidden md:block w-96">
        <Lottie animationData={registerLottieData}></Lottie>
      </div>
    </div>
  );
};

export default Register;
