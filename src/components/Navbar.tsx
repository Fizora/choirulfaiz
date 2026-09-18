"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "#about" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8 bg-transparent backdrop-blur-md">
      <div className="">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-black transition-opacity hover:opacity-70 sm:text-2xl"
          >
            choirulfaiz.
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-red-200 text-black"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="https://wa.me/085235086814"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-black px-6 py-2 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-zinc-800 active:scale-95"
            >
              Chat Me
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
          <nav className="mt-3 rounded-3xl border border-black/5 bg-white/95 p-3 shadow-lg backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <a
                href="https://wa.me/085235086814"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 rounded-2xl bg-black px-4 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-800"
              >
                Chat Me
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
