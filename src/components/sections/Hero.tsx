import Link from "next/link";
import { LuArrowRight, LuArrowUpRight, LuChevronRight } from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "../ui/Button";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center py-40 min-h-screen">
      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-10">
        <p className="uppercase tracking-[0.22em] text-gray-500">
          MCF · Independent web designer & developer
        </p>
        <h1 className="text-white max-w-6xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          Stop Losing High-Value Customers to Slow Websites
        </h1>
        {/* <p className="max-w-2xl leading-relaxed text-xl">
          I build sub-second, high-converting websites for F&B, real estate, and
          scaling businesses. Turn everyday site visitors into loyal, paying
          clients.
        </p> */}
        <span className="text-gray-400">- Open to new project</span>
        {/* bottom content */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-20">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <PrimaryButtonLink href="https://wa.me/085235086814">
              Start Your Project
            </PrimaryButtonLink>
            <SecondaryButtonLink href="/projects">
              See Projects
            </SecondaryButtonLink>
          </div>
          <div className="max-w-lg leading-relaxed pt-10 text-gray-400 text-lg">
            <p>
              I build sub-second, high-converting websites for F&B, real estate,
              and scaling businesses. Turn everyday site visitors into loyal,
              paying clients.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <span className="text-gray-500 uppercase tracking-[0.22em]">
            support by
          </span>
          <p className="text-white text-6xl leading-relaxed">Lumentify</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
