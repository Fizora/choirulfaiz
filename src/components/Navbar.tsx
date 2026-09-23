"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { navbarLinks } from "./constant/navItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // document.body cuma tersedia di client, bukan saat SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY.current;

        // Selalu tampil kalau masih dekat puncak halaman (hindari flicker di scroll kecil)
        if (currentScrollY < 80) {
          setIsHidden(false);
        } else if (scrollDelta > 0) {
          // scroll ke bawah
          setIsHidden(true);
        } else if (scrollDelta < 0) {
          // scroll ke atas
          setIsHidden(false);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Jangan pernah sembunyikan navbar selagi mobile menu terbuka —
  // supaya tombol close tetap bisa dijangkau
  const shouldHide = isHidden && !isMenuOpen;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-black/30 py-4 backdrop-blur-3xl  transition-transform duration-300 ease-in-out  ${
        shouldHide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl tracking-tight text-white"
          >
            <div className="font-black tracking-[0.22em] font-mono">
              MCF - DEV
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-3 md:flex">
            {navbarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-2 text-gray-100 transition-colors duration-200 hover:underline"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="https://wa.me/085235086814"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-3 rounded-md bg-white px-6 py-2 text-lg font-medium text-black transition-transform duration-200 hover:scale-105 hover:bg-gray-100 active:scale-95"
            >
              Chat Me
              <LuArrowUpRight size={20} />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            className="rounded-md p-2 text-white transition-colors md:hidden"
          >
            {isMenuOpen ? <LuX size={25} /> : <LuMenu size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation — di-portal keluar dari <header> supaya lolos dari stacking context backdrop-blur milik header */}
      {mounted &&
        isMenuOpen &&
        createPortal(
          <nav className="w-full fixed left-0 top-0 z-50 h-screen bg-black p-4 backdrop-blur-xl md:hidden">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsMenuOpen((current) => !current)}
                aria-label={
                  isMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isMenuOpen}
                className="rounded-md p-2 text-white transition-colors md:hidden"
              >
                {isMenuOpen ? <LuX size={25} /> : <LuMenu size={25} />}
              </button>
            </div>
            <div className="flex flex-col gap-1 justify-center">
              {navbarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className=" px-4 py-3 text-lg font-medium text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-black"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="https://wa.me/085235086814"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 flex items-center justify-center gap-3 rounded-md bg-white px-4 py-3 text-lg font-medium text-black "
              >
                Chat Me
                <LuArrowUpRight size={20} />
              </Link>
            </div>
          </nav>,
          document.body,
        )}
    </header>
  );
};

export default Navbar;
