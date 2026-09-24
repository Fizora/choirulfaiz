"use client";

import Image from "next/image";

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We talk through your goals, your customers, and what success looks like before writing a single line of code.",
    image: "/img/1.jpeg",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Clean, purposeful layouts built around your brand — every screen designed to guide visitors toward action.",
    image: "/img/2.jpeg",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Fast, reliable code built with modern tools — optimized for speed, SEO, and every device your customers use.",
    image: "/img/3.jpeg",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship, test on real devices, and hand over a site that's ready to bring in customers from day one.",
    image: "/img/4.jpeg",
  },
];

const Steps = () => {
  return (
    <section className=" py-24 md:py-32 min-h-screen">
      <div className="mx-auto container max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl md:mb-20">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-gray-500">
            How we work
          </p>

          <h2 className="text-4xl font-medium leading-[0.98] tracking-tighter text-white sm:text-5xl md:text-6xl">
            From idea to launch, in four clear steps.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative aspect-3/4 overflow-hidden rounded"
            >
              {/* Photo */}
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Base gradient — keeps number/title readable even without hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              {/* Number + title — always visible */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                <span className="text-sm font-medium tracking-[0.15em] text-zinc-300">
                  {step.number}
                </span>
                <h3 className="text-2xl md:text-4xl xl:text-5xl font-medium text-white">
                  {step.title}
                </h3>
              </div>

              {/* Hover panel — slides up from bottom, backdrop-blur-xl glass effect */}
              <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-black/40 p-6 backdrop-blur-xl transition-transform duration-500 ease-out group-hover:translate-y-0">
                <span className="text-sm font-medium tracking-[0.15em] text-zinc-300">
                  {step.number}
                </span>
                <h3 className="mt-1 text-2xl font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-xl leading-relaxed text-zinc-200">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
