// components/ui/Button.tsx
import Link from "next/link";
import { LuArrowRight, LuChevronRight } from "react-icons/lu";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export const PrimaryButtonLink = ({
  children,
  href,
  className = "",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`group flex items-center justify-between gap-4 rounded-md bg-orange-500 py-2 pl-8 pr-2 text-lg font-medium text-white  duration-200 ${className} backdrop-blur-lg duration-300  hover:bg-orange-600 hover:shadow-[0px_0px_25px_5px] shadow-orange-500/30 active:scale-90 transition-all`}
    >
      {children}
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-md">
        {/* Default: Chevron. Hover: geser keluar ke kiri lalu hilang */}
        <LuChevronRight
          size={18}
          className="col-start-1 row-start-1 transition-all duration-300 ease-out group-hover:-translate-x-4 group-hover:opacity-0"
        />
        {/* Default: tersembunyi di kanan. Hover: masuk dari kanan jadi Arrow */}
        <LuArrowRight
          size={18}
          className="col-start-1 row-start-1 translate-x-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
        />
      </span>
    </Link>
  );
};

export const SecondaryButtonLink = ({
  children,
  href,
  className = "",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`group flex items-center justify-between gap-2 rounded-md bg-white/20 backdrop-blur-lg pl-8 py-2 pr-2 text-lg font-medium text-white transition-colors duration-200 hover:bg-white/30 ${className}`}
    >
      {children}
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden">
        {/* Default: Arrow. Hover: geser keluar ke kanan lalu hilang (kebalikan primary) */}
        <LuArrowRight
          size={18}
          className="col-start-1 row-start-1 transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:opacity-0"
        />
        {/* Default: tersembunyi di kiri. Hover: masuk dari kiri jadi Chevron */}
        <LuChevronRight
          size={18}
          className="col-start-1 row-start-1 -translate-x-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
        />
      </span>
    </Link>
  );
};
