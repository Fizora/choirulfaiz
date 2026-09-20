"use client";

import Link from "next/link";
import { useState } from "react";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { navbarLinks } from "./constant/navItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-300 bg-gray-200/20 py-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl tracking-tight text-black sm:text-2xl"
          >
            <div className="font-black tracking-[0.22em]">MCF - DEV</div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-3 md:flex">
            {navbarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-xl text-black transition-colors duration-200 hover:underline"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="https://wa.me/085235086814"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-3 rounded-full bg-black px-6 py-2 text-xl font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-zinc-800 active:scale-95"
            >
              Chat Me
              <LuArrowUpRight size={25} />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            className="rounded-full p-2 text-black transition-colors hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute left-0 top-0 z-20 h-screen w-2/3 border border-black/5 bg-white p-3 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-1">
              {/* Close button mobile */}
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="mb-4 flex w-fit rounded-full p-2 text-black transition-colors hover:bg-gray-100"
              >
                <LuX size={22} />
              </button>

              {navbarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-lg font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-black"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://wa.me/085235086814"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-3 rounded-2xl bg-black px-4 py-3 text-xl font-medium text-white transition-colors duration-200 hover:bg-zinc-800"
              >
                Chat Me
                <LuArrowUpRight size={25} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
