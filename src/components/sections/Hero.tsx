import Link from "next/link";
import { LuArrowRight, LuArrowUpRight, LuChevronRight } from "react-icons/lu";
import { PrimaryButtonLink, SecondaryButtonLink } from "../ui/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center min-h-screen">
      <div className="absolute inset-y-0 inset-x-0 flex justify-center ">
        <div className="relative h-full w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-60 rounded mask-b-from-60%"
          >
            <source src="/video/4.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* dari absolute inset-0 jadi relative — biar section ikut membesar mengikuti konten */}
      <div className="relative z-10 py-40 bg-black/20">
        <div className="mx-auto w-full max-w-7xl space-y-6 px-4 md:px-8 py-10">
          <p className="uppercase tracking-[0.22em] text-white">
            Independent Web Developer · East Java, Indonesia
          </p>
          <h1 className="text-white max-w-6xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Fast Websites. Modern Experiences. Built to Convert.
          </h1>
          {/* <p className="max-w-2xl leading-relaxed text-xl text-white">
            I design and develop high-performance websites for restaurants,
            property businesses, and household service companies — combining
            modern interfaces, fast load times, and clear user journeys.
          </p> */}
          <div className="text-white bg-orange-400/10 backdrop-blur-sm flex items-center gap-2 w-max rounded-full p-1.5 px-3">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-orange-500"></span>
            </span>{" "}
            Open to new project
          </div>
          {/* bottom content */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between py-20">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <PrimaryButtonLink href="https://wa.me/085235086814">
                Start a Project
              </PrimaryButtonLink>
              <SecondaryButtonLink href="/projects">
                View Projects
              </SecondaryButtonLink>
            </div>
            <div className="max-w-xl leading-relaxed pt-10 text-white text-xl">
              <p>
                From first impression to final click, every part of the website
                is designed to make your business clearer, more credible, and
                easier to choose.
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
