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

  const visibleCards = [
    testimonials[startIndex],
    testimonials[(startIndex + 1) % total],
  ];

  return (
    <section className="mx-auto w-full max-w-[1320px] py-20 px-4 sm:px-6">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="font-poppins font-semibold text-3xl leading-[42px] text-[#1D1D1D] sm:text-4xl sm:leading-[52px]">
          Some Students Feedback
        </h2>
        <p className="mt-4 text-base leading-7 text-[#777777] sm:text-lg sm:leading-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="relative flex flex-col gap-4 md:flex-row md:items-center">
        <button
          onClick={prevSlide}
          className="hidden md:flex flex-shrink-0 h-12 w-12 items-center justify-center rounded-full bg-[#E6F6FF] text-[#289BDE] transition hover:bg-[#D0EFFF]"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
          {visibleCards.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-[#E8E8E8] bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <Quote
                  size={32}
                  className="text-[#D2D2D2] fill-[#D2D2D2]"
                  strokeWidth={0}
                />
                <div className="flex flex-wrap items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < t.rating
                          ? "fill-[#FBBF24] text-[#F59E0B]"
                          : "fill-[#FEF3C7] text-[#FCD34D]"
                      }
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-base leading-7 text-[#777777]">
                {t.text}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#4A4A4A]">
                    {t.name}
                  </h4>
                  <p className="text-base text-[#777777]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="hidden md:flex flex-shrink-0 h-12 w-12 items-center justify-center rounded-full bg-[#289BDE] text-white transition hover:bg-blue-600"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
