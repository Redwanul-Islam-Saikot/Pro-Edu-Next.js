"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Awlad Hossain",
    role: "UI Designer",
    rating: 4,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
    image: "/Ellipse 1.png",
  },
  {
    name: "Shanta Akter",
    role: "Graphic Designer",
    rating: 4,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
    image: "/Ellipse 2.png",
  },
  {
    name: "Imran Hossain",
    role: "Web Developer",
    rating: 5,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
    image: "/Ellipse 3.jpg",
  },
];

export default function StudentsFeedback() {
  const [startIndex, setStartIndex] = useState(0);
  const total = testimonials.length;

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Always show 2 cards starting at startIndex, wrapping around the array
  const visibleCards = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % total],
  ];

  return (
    <section className="max-w-[1320px] mx-auto py-20 px-8">
      {/* Heading */}
      <div className="text-center max-w-[606px] mx-auto mb-12">
        <h2 className="font-poppins font-semibold text-[45px] leading-[60px] text-[#1D1D1D]">
          Some Students Feedback
        </h2>
        <p className="font-poppins font-normal text-[16px] leading-[30px] text-[#777777] mt-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Testimonial cards + nav arrows */}
      <div className="relative flex items-center gap-4">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-[#E6F6FF] items-center justify-center text-[#289BDE] cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {visibleCards.map((t) => (
            <div
              key={t.name}
              className="border border-[#E8E8E8] rounded-md p-8"
            >
              <div className="flex items-start justify-between">
                <Quote
                  size={40}
                  className="text-[#D2D2D2] fill-[#D2D2D2]"
                  strokeWidth={0}
                />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < t.rating
                          ? "fill-[#FBBF24] text-[#F59E0B]"
                          : "fill-[#FEF3C7] text-[#FCD34D]"
                      }
                    />
                  ))}
                </div>
              </div>

              <p className="font-poppins font-normal text-[16px] leading-[30px] text-[#777777] mt-4">
                {t.text}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <div className="relative w-[42px] h-[42px] rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-[#4A4A4A]">
                    {t.name}
                  </h4>
                  <p className="font-poppins font-normal text-[16px] leading-[24px] text-[#777777]">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-[#289BDE] items-center justify-center text-white cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
