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
    <section className="max-w-[872px] mx-auto py-20 px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-poppins font-semibold text-[45px] leading-[60px] text-[#1D1D1D]">
          Frequently Asked Questions
        </h2>
        <p className="font-poppins font-normal text-[16px] leading-[30px] text-[#777777] mt-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-md border transition-colors duration-300 ${
                isOpen
                  ? "bg-[#289BDE]/10 border-transparent"
                  : "bg-white border-[#E8E8E8]"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-6 cursor-pointer"
              >
                <span className="font-poppins font-semibold text-[20px] leading-[30px] text-[#4A4A4A] text-left">
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

              {/* Animated answer panel */}
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <p className="font-poppins font-normal text-[16px] leading-[30px] text-[#777777] px-6 pb-6">
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
