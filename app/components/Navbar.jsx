"use client";
import { Logs, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className="w-full relative flex justify-between   py-4 items-center px-10 bg-black text-white">
      {/* Logo */}
      <div className="font-bold text-3xl select-none">̷N̷̷F̷̷T̷'̷s̷</div>

      {/* Desktop Menu */}
      <div className="md:flex hidden items-center space-x-10">
        <ul className="flex space-x-6 list-none">
          <li className="font-semibold text-lg cursor-pointer hover:text-[#ADD824] transition">Home</li>
          <li className="font-semibold text-lg cursor-pointer hover:text-[#ADD824] transition">Shop</li>
          <li className="font-semibold text-lg cursor-pointer hover:text-[#ADD824] transition">About</li>
          <li className="font-semibold text-lg cursor-pointer hover:text-[#ADD824] transition">Contact</li>
        </ul>
        <button className="border-2 rounded-full font-semibold border-[#ADD824] text-[#ADD824] bg-[#ADD824]/10 py-2 px-6 hover:bg-[#cb00dd]/20 transition">
          Sign In
        </button>
      </div>

      {/* Mobile Menu Toggle Icon */}
      <div className="md:hidden block cursor-pointer" onClick={() => setNavActive((prev) => !prev)}>
        {navActive ? (
          <X strokeWidth={2.75} className="h-10 w-10" />
        ) : (
          <Logs strokeWidth={2.75} className="h-10 w-10" />
        )}
      </div>

      {/* ✅ Mobile Menu with Transition */}
      <div
        className={`md:hidden flex flex-col absolute bg-black/95 w-full left-0 items-center space-y-6 py-6 z-50 transition-all duration-500 ease-in-out ${
          navActive
            ? "opacity-100 translate-y-0 pointer-events-auto top-[72px]"
            : "opacity-0 -translate-y-5 pointer-events-none top-[72px]"
        }`}
      >
        <ul className="flex flex-col justify-center gap-4 items-center text-center list-none">
          <li className="font-semibold text-lg cursor-pointer hover:text-[#ADD824] transition">Home</li>
          <li className="font-semibold text-lg cursor-pointer hover:text-[#ADD824] transition">Shop</li>
          <li className="font-semibold text-lg cursor-pointer hover:text-[#ADD824] transition">About</li>
          <li className="font-semibold text-lg cursor-pointer hover:text-[#ADD824] transition">Contact</li>
        </ul>
        <button className="border-2 rounded-full font-semibold border-[#ADD824] text-[#ADD824] bg-[#ADD824]/10 py-2 px-6 hover:bg-[#cb00dd]/20 transition">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
