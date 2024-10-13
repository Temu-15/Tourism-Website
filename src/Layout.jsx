import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

import React from "react";

function Layout() {
  return (
    <div className="w-full h-full p-0 m-0">
      <Navbar />
      <div className="content block">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
