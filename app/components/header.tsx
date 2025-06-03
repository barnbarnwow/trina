"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="m-4 md:p-4">
      <nav className="flex items-center justify-around">
        <h1 className="text-2xl font-bold">Trina&apos;s Website</h1>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-25 w-full bg-black md:static md:flex md:space-x-4 md:items-center md:w-auto md:bg-transparent`}
        >
          <li className="p-4 md:p-0">
            <Link href="/" className="active:text-teal-300 hover:text-teal-300">
              Home
            </Link>
          </li>
          <li className="p-4 md:p-0">
            <Link
              href="./booking"
              className="active:text-teal-300 hover:text-teal-300"
            >
              Booking
            </Link>
          </li>
          <li className="p-4 md:p-0">
            <Link
              href="./about"
              className="active:text-teal-300 hover:text-teal-300"
            >
              About
            </Link>
          </li>
          <li className="p-4 md:p-0">
            <Link
              href="./contact"
              className="active:text-teal-300 hover:text-teal-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
