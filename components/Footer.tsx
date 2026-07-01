import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#161616] p-12 space-y-4">
      <div className="text-white font-bold text-4xl">
        <Link href="/">Pro Edu</Link>
      </div>

      <div className="text-gray-300 text-base text-center">
        Office 41, Zawaya Buildin, Ghala Muscat, Sultanate of Oman
      </div>

      <div className="flex items-center space-x-2 text-gray-300 text-sm">
        <div className="cursor-pointer hover:text-white">Privacy Ploicy</div>
        <div>|</div>
        <div className="cursor-pointer hover:text-white">Terms of use</div>
      </div>

      <div className="flex items-center space-x-3 pt-2">
        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-blue-500 cursor-pointer">
          F
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-blue-500 cursor-pointer">
          T
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-blue-500 cursor-pointer">
          in
        </div>
        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-blue-500 cursor-pointer">
          tt
        </div>
      </div>
    </div>
  );
}
