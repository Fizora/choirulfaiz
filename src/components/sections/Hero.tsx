import Link from "next/link";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center py-40">
      <div className="mx-auto w-full container space-y-6 px-4 ">
        <p className="uppercase tracking-[0.22em]">
          MCF · Independent web designer & developer
        </p>
        <h1 className="max-w-6xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Stop Losing High-Value Customers to Slow Websites
        </h1>
        {/* <p className="max-w-2xl leading-relaxed text-xl">
          I build sub-second, high-converting websites for F&B, real estate, and
          scaling businesses. Turn everyday site visitors into loyal, paying
          clients.
        </p> */}
        <span className="">- Open to new project</span>
        {/* bottom content */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-20">
          <div className="flex items-center gap-4 lg:text-xl">
            <Link
              href="/contact"
              className="bg-black flex items-center justify-between gap-4 rounded-full pl-8 pr-2 py-3 font-medium text-white transition-transform duration-200"
            >
              Start Your Project
              <div className="bg-white text-black rounded-full p-2">
                <LuArrowRight></LuArrowRight>
              </div>
            </Link>
            <Link
              href=""
              className="bg-white text-black px-8 py-3 rounded-full flex items-center gap-2 font-medium"
            >
              See Project
              <div className="p-2">
                <LuArrowUpRight></LuArrowUpRight>
              </div>
            </Link>
          </div>
          <div className="max-w-xl text-xl pt-10">
            <p>
              I'm Moch Choirul Faiz, a designer and developer creating strategic
              websites for food & beverage brands, household services, and real
              estate teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
