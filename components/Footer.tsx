import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#161616] px-4 py-10 text-center text-white sm:px-6 md:py-12">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-4">
        <div className="text-3xl font-bold sm:text-4xl">
          <Link href="/">Pro Edu</Link>
        </div>

        <div className="max-w-2xl text-center text-sm text-gray-300 sm:text-base">
          Office 41, Zawaya Buildin, Ghala Muscat, Sultanate of Oman
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300">
          <div className="cursor-pointer hover:text-white">Privacy Policy</div>
          <span className="text-gray-500">|</span>
          <div className="cursor-pointer hover:text-white">Terms of use</div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {["F", "T", "in", "tt"].map((label) => (
            <div
              key={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-blue-500 cursor-pointer"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
