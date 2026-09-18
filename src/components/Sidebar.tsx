"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const navLinks = [
  { name: "Home", href: "/" },
  // { name: "Blog", href: "/blog" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

const NavList = ({ onNavigate }: { onNavigate?: () => void }) => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {navLinks.map((link, index) => {
        const isActive = pathName === link.href;
        return (
          <Link
            key={index}
            href={link.href}
            onClick={onNavigate}
            className={`flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors duration-200 ${
              isActive
                ? "text-white font-semibold"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile top navbar */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold shrink-0">
            F
          </div>
          <div>
            <h1 className="text-sm font-bold leading-none">Fizoraa</h1>
            <p className="text-gray-500 text-[10px] mt-0.5">
              Software Engineer
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="p-2 rounded-md hover:bg-gray-900 transition-colors duration-200"
        >
          {isOpen ? <LuX size={20} /> : <LuMenu size={20} />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden fixed top-14.25 left-0 w-full z-40 bg-black border-b border-gray-900 px-4 py-4">
          <NavList onNavigate={() => setIsOpen(false)} />
        </div>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 w-64 h-screen px-4 pt-15 border-r border-zinc-900 bg-zinc-950">
        <div className="pb-10 flex flex-col gap-3">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-purple-600 flex items-center justify-center text-xl font-bold shrink-0">
            F
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Fizoraa</h1>
            <p className="text-gray-500 text-sm">Software Engineer</p>
          </div>
        </div>
        <NavList />
      </aside>
    </>
  );
};

export default Sidebar;
