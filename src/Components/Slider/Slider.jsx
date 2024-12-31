import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: false }}
    >
      <SwiperSlide>
        <div className="relative">
          <img className="w-full md:h-[550px] h-96 object-cover" src={slide1} />
          <div className="bg-black/75 absolute inset-0 z-10"></div>
          <div className="absolute top-[20%] left-[5%] md:left-[15%] z-20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-CinzelDecorative text-white mb-1">
              Freshly Prepared Dish
            </h3>
            <p className="text-gray-100 mb-2">
              {" "}
              <span></span>
              Savor the deliciousness of carefully crafted meals, made with the
              finest ingredients <br /> to satisfy every craving.
            </p>
            <p className="text-gray-100 text-xs mt-6">
              Expire date: 08/03/2024
            </p>
            <Link to="/available-foods">
              <button className="mt-5 px-5 py-1 md:px-8 md:py-3 bg-custom-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                Available foods
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full md:h-[550px] h-96 object-cover" src={slide2} />
          <div className="bg-black/75 absolute inset-0 z-10"></div>
          <div className="absolute top-[20%] left-[5%] md:left-[15%] z-20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-CinzelDecorative text-white mb-1">
              Nutritious Meal
            </h3>
            <p className="text-gray-100 mb-2">
              Enjoy meals that not only taste great but also fuel your body with
              essential <br /> nutrients for a balanced lifestyle.
            </p>
            <p className="text-gray-100 text-xs mt-6">
              Expire date: 03/10/2025
            </p>
            <Link to="/available-foods">
              <button className="mt-5 px-5 py-1 md:px-8 md:py-3 bg-custom-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                Available foods
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full md:h-[550px] h-96 object-cover" src={slide3} />
          <div className="bg-black/75 absolute inset-0 z-10"></div>
          <div className="absolute top-[20%] left-[5%] md:left-[15%] z-20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-CinzelDecorative text-white mb-1">
              Food Being Donated
            </h3>
            <p className="text-gray-100 mb-2">
              Your donation helps provide healthy, fresh meals to those who need
              it most. <br /> Make an impact today.
            </p>
            <p className="text-gray-100 text-xs mt-6">
              Expire date: 08/10/2025
            </p>
            <Link to="/available-foods">
              <button className="mt-5 px-5 py-1 md:px-8 md:py-3 bg-custom-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                Available foods
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img className="w-full md:h-[550px] h-96 object-cover" src={slide4} />
          <div className="bg-black/75 absolute inset-0 z-10"></div>
          <div className="absolute top-[20%] left-[5%] md:left-[15%] z-20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-CinzelDecorative text-white mb-1">
              Food Being Shared in a Community
            </h3>
            <p className="text-gray-100 mb-2">
              Join us in the mission to feed those in need. Together, we can
              make <br /> a difference in our community.
            </p>
            <p className="text-gray-100 text-xs mt-6">
              Expire date: 08/10/2025
            </p>
            <Link to="/available-foods">
              <button className="mt-5 px-5 py-1 md:px-8 md:py-3 bg-custom-orange text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
                Available foods
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
