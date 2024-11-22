"use client";
import React from "react";
import { MdWarning } from "react-icons/md";

function WebSiteNotAvailable() {
  return (
    <div className="relative group">
      <button
        className="relative inline-block p-px font-semibold leading-6 text-white bg-red-800 shadow-2xl cursor-pointer rounded-xl shadow-red-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
        onClick={() => alert("Website currently Not Available")}
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

        <span className="relative z-10 block px-4 py-3 rounded-xl bg-red-950">
          <div className="relative z-10 flex items-center space-x-2">
            <MdWarning className="text-yellow-400 text-xl" />
            <span className="transition-all duration-500 group-hover:translate-x-1">
              Website
            </span>
          </div>
        </span>
      </button>
    </div>
  );
}

export default WebSiteNotAvailable;
