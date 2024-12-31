import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
const MainLayout = () => {
  return (
    <div className="font-poppins">
      <section className="2xl:w-10/12 mx-auto">
        <Navbar></Navbar>
      </section>
      <section
        className="min-h-screen"
        style={{ minHeight: `calc(100vh - 64px - 353px)` }}
      >
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
      <Toaster position="top-right" />
    </div>
  );
};

export default MainLayout;
