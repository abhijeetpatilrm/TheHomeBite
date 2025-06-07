import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileAvatar from "./Avatar";
import NavbarMenu from "./NavbarMenu";
import logo from "../HomeBiteChef.png";

function NavbarLg({ name }) {
  return (
    <>
      <div className="w-full md:flex hidden justify-between shadow items-center py-3 lg:px-16 md:px-12 sm:px-8 px-2">
        <Link to="/" className="flex gap-1.5 items-center">
          <img src={logo} className="h-[70px] object-contain" alt="Logo" />
          <h1 className="font-bold text-xl font-mono">HomeBites</h1>
        </Link>

        <div className="flex gap-4 items-center font-semibold">
          <Link
            to="/about"
            className="px-4 py-2 bg-white border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white transition duration-300 rounded-full shadow-sm"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 bg-white border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition duration-300 rounded-full shadow-sm"
          >
            Contact Us
          </Link>
          <Link
            to="/provider"
            className="px-4 py-2 bg-white border border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white transition duration-300 rounded-full shadow-sm"
          >
            Homemade Food Providers
          </Link>

          {name ? <ProfileAvatar name={name} /> : <NavbarMenu />}
        </div>
      </div>
    </>
  );
}

function NavbarSm({ name }) {
  return (
    <>
      <div className="flex md:hidden px-4 py-2 shadow justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-[50px] object-contain" alt="Logo" />
          <h1 className="font-bold text-xl font-mono ml-2">HomeBites</h1>
        </Link>
        <div className="flex items-center gap-3">
          {name ? <ProfileAvatar name={name} /> : <NavbarMenu />}
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const user = useSelector((state) => state.user.user);
  return (
    <nav>
      <NavbarLg name={user?.name} />
      <NavbarSm name={user?.name} />
    </nav>
  );
}

export default Navbar;
