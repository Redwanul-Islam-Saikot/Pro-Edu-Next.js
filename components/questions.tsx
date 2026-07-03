"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What other services are you compatible with?",
    answer:
      "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
  },
  {
    question: "I have a technical i need resolved, who do i email?",
    answer:
      "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
  },
  {
    question: "What other services are you compatible with?",
    answer:
      "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
  },
  {
    question: "What other services are you compatible with?",
    answer:
      "There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mx-auto w-full max-w-[872px] py-20 px-4 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="font-poppins font-semibold text-3xl leading-[42px] text-[#1D1D1D] sm:text-4xl sm:leading-[52px]">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-base leading-7 text-[#777777] sm:text-lg sm:leading-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-colors duration-300 ${
                isOpen
                  ? "bg-[#289BDE]/10 border-transparent"
                  : "bg-white border-[#E8E8E8]"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-5 text-left sm:px-6 sm:py-6"
              >
                <span className="font-poppins font-semibold text-lg leading-7 text-[#4A4A4A] sm:text-xl sm:leading-8">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp
                    size={20}
                    className="text-[#4A4A4A] flex-shrink-0"
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    className="text-[#4A4A4A] flex-shrink-0"
                  />
                )}
              </button>

              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <p className="font-poppins font-normal text-base leading-7 text-[#777777] px-5 pb-6 sm:px-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
