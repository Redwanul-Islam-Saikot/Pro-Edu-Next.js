import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full h-[700px] rounded-md overflow-hidden mx-auto max-w-[1320px]">
      <Image
        src="/education.png"
        alt="Education"
        fill
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1D1D1D]/70" />

      {/* Left arrow */}
      <button className="absolute left-8 top-1/2 -translate-y-1/2 text-white">
        <ChevronLeft size={40} strokeWidth={2} />
      </button>

      {/* Right arrow */}
      <button className="absolute right-8 top-1/2 -translate-y-1/2 text-white">
        <ChevronRight size={40} strokeWidth={2} />
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        <h1 className="font-poppins font-semibold text-[65px] leading-[85px] text-white max-w-[670px]">
          Get Started Digital Learning
        </h1>
        <p className="font-poppins font-normal text-[18px] leading-[30px] text-[#F4F4F4] max-w-[670px] mt-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button className="mt-6 bg-[#289BDE] text-white font-poppins font-semibold text-[20px] px-8 py-3 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
}
