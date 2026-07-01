import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4 font-bold text-4xl">
        <Link href="/">Pro Edu</Link>
      </div>
      <div className="flex items-center space-x-8 text-lg">
        <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
          <Link href="/">Home</Link>
        </div>
        <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
          Courses
        </div>
        <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
          Deals
        </div>
        <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
          Success
        </div>
        <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
          <Link href="/about">About</Link>
        </div>
        <div className="text-gray-500 hover:text-blue-500 cursor-pointer">
          Register
        </div>
      </div>
      <button className="text-blue-500 font-semibold border border-blue-500 rounded-md px-8 py-3">
        Register
      </button>
    </div>
  );
}
