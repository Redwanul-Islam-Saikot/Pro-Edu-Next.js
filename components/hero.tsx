"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    image: "/education.png",
    title: "Get Started Digital Learning",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    buttonText: "Get Started",
  },
  {
    image: "/Hero 2.png",
    title: "Learn Anytime, Anywhere",
    description:
      "Access world-class courses on any device, at your own pace, with instructors ready to guide you every step of the way.",
    buttonText: "Explore Courses",
  },
  {
    image: "/Hero 3.png",
    title: "Earn Recognized Certifications",
    description:
      "Build skills that matter with certificates trusted by employers and institutions around the world.",
    buttonText: "View Certificates",
  },
];

const AUTOPLAY_INTERVAL = 2000; // 2 seconds

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, current]);

  return (
    <div
      className="relative w-full h-[700px] rounded-md overflow-hidden mx-auto max-w-[1320px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sliding track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#1D1D1D]/70" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <h1 className="font-poppins font-semibold text-[65px] leading-[85px] text-white max-w-[670px]">
                {slide.title}
              </h1>
              <p className="font-poppins font-normal text-[18px] leading-[30px] text-[#F4F4F4] max-w-[670px] mt-4">
                {slide.description}
              </p>
              <button className="mt-6 bg-[#289BDE] text-white font-poppins font-semibold text-[20px] px-8 py-3 rounded-md">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-white z-10 hover:opacity-80 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} strokeWidth={2} />
      </button>

      {/* Right arrow */}
      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white z-10 hover:opacity-80 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight size={40} strokeWidth={2} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === index ? "bg-[#289BDE]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
