"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Deals", href: "#" },
  { label: "Success", href: "#" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-4xl font-bold text-slate-900">
          Pro Edu
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-slate-200 p-2 text-slate-600 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>

        <nav
          className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex flex-col gap-3 px-4 pb-4 md:flex-row md:items-center md:gap-8 md:px-0 md:pb-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 transition hover:text-blue-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-blue-500 bg-blue-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 md:px-8"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
