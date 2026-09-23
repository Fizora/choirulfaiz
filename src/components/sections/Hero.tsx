import Link from "next/link";
import { LuArrowRight, LuArrowUpRight, LuChevronRight } from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "../ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center min-h-screen">
      <div className="absolute inset-y-0 inset-x-0 flex justify-center">
        <div className="relative h-full w-full">
          <Image
            alt="Modern business background"
            src="/img/new-hero.jpeg"
            fill
            className="object-cover object-center opacity-60 rounded mask-t-from-10% mask-t-to-100% mask-b-from-50% "
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0 py-40">
        <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-10">
          <p className="uppercase tracking-[0.22em] text-white">
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
          <div className="text-white bg-orange-400/20 backdrop-blur-sm flex items-center gap-2 w-max rounded-full p-1.5 px-3">
            <span className="relative flex  size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-orange-500"></span>
            </span>{" "}
            Open to new project
          </div>
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
            <div className="max-w-lg leading-relaxed pt-10 text-white text-lg">
              <p>
                I build sub-second, high-converting websites for F&B, real
                estate, and scaling businesses. Turn everyday site visitors into
                loyal, paying clients.
              </p>
            </div>
          </div>
          <div className="space-y-6 border-t border-gray-400/20 py-10">
            <span className="text-gray-500 uppercase tracking-[0.22em]">
              support by
            </span>
            <div className="text-white text-4xl leading-relaxed flex items-center gap-3 font-mono">
              <Image
                src={"/img/logo.svg"}
                height={32}
                width={32}
                alt="brand support"
                className="rounded-md"
              />
              Lumentify
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
