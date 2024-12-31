import { Link } from "react-router-dom";
import spoonLottieData from "../../../assets/lottie/spoon.json";
import Lottie from "lottie-react";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto px-4 py-8 space-y-8 lg:space-y-0 lg:flex lg:justify-between">
        {/* Column 1 */}
        <div>
          {/* Logo Section */}
          <div className="mb-4 flex items-center gap-2">
            <Link to="/" className="text-xl">
              <h2 className="text-xl font-black font-Kavivanar text-custom-orange">
                <span className="font-black text-2xl">F</span>ood Circle
              </h2>
            </Link>
            <div className="w-10">
              <img src={logo} alt="logo" />
            </div>
            <Lottie className="w-20" animationData={spoonLottieData}></Lottie>
          </div>
          <p className="mt-2 text-sm">
            Sharing food, spreading happiness. Join us in making a difference in
            your community by sharing surplus food with those in need.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a
                href="/available-foods"
                className="hover:underline hover:text-orange-500"
              >
                Available Foods
              </a>
            </li>
            <li>
              <a
                href="/add-food"
                className="hover:underline hover:text-orange-500"
              >
                Add Food
              </a>
            </li>
            <li>
              <a
                href="/myFood-request"
                className="hover:underline hover:text-orange-500"
              >
                My Food Requests
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-2">Contact Us</h3>
          <p>
            Email:{" "}
            <span className="text-orange-500">support@foodcircle.com</span>
          </p>
          <p>
            Phone: <span className="text-orange-500">+123 456 7890</span>
          </p>
          <p>
            Address:{" "}
            <span className="text-orange-500">
              123 Food Lane, Foodtown, FC 56789
            </span>
          </p>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold text-orange-500 mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              target="_blank"
              to="https://www.facebook.com/ab.rahman.253080/"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png"
                alt="Facebook"
                className="h-6 w-6 text-orange-500"
              />
            </Link>
            <Link
              target="_blank"
              to="https://github.com/Ab-Rahman10"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://img.icons8.com/?size=64&id=3tC9EQumUAuq&format=png"
                alt="Twitter"
                className="h-6 w-6 text-orange-500"
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://img.icons8.com/?size=48&id=32323&format=png"
                alt="Instagram"
                className="h-6 w-6 text-orange-500"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-orange-500 pt-4 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-500">Food Circle</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
