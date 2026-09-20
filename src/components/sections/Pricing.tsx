import Link from "next/link";
import { pricingList } from "../constant/data";
import { LuArrowUpRight } from "react-icons/lu";

const Pricing = () => {
  return (
    <section className="bg-[#f4f4f2] py-24 md:py-32">
      <div className="mx-auto container px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-6 md:mb-14">
          <p className="font-medium uppercase tracking-[0.22em] text-zinc-500">
            Simple project pricing
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-medium leading-[0.98] tracking-tighter text-zinc-950 sm:text-5xl md:text-6xl lg:text-7xl">
              A clear path from idea to launch.
            </h2>

            <p className="max-w-xs text-xl leading-relaxed text-zinc-500 md:pb-1">
              Every project is scoped around your goals, content, and the kind
              of customer you want to attract.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {pricingList.map((pricing) => {
            const isDark = pricing.style === "dark";

            return (
              <article
                key={pricing.id}
                className={`flex min-h-98.75 flex-col border p-7 md:p-8 ${
                  isDark
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 bg-[#fafafa] text-zinc-950"
                }`}
              >
                {/* Plan title */}
                <p
                  className={`text-sm font-medium uppercase tracking-[0.2em] ${
                    isDark ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {pricing.title}
                </p>

                {/* Price */}
                <h3
                  className={`mt-12 text-3xl font-medium leading-none tracking-[-0.06em] sm:text-4xl ${
                    isDark ? "text-white" : "text-zinc-950"
                  }`}
                >
                  {pricing.price}
                </h3>

                {/* Description */}
                <p
                  className={`mt-7 max-w-sm border-b pb-3 text-xl leading-relaxed ${
                    isDark
                      ? "border-zinc-700 text-zinc-300"
                      : "border-zinc-300 text-zinc-500"
                  }`}
                >
                  {pricing.desc}
                </p>

                {/* Features */}
                <ul className="mt-5 flex flex-1 flex-col gap-3">
                  {pricing.feature.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-base ${
                        isDark ? "text-zinc-200" : "text-zinc-600"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-px text-base ${
                          isDark ? "text-zinc-400" : "text-zinc-500"
                        }`}
                      >
                        +
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={pricing.href}
                  className={`group mt-8 inline-flex w-fit items-center gap-3 border-b pb-1 text-xl font-medium transition-colors ${
                    isDark
                      ? "border-zinc-500 text-white hover:border-white"
                      : "border-zinc-800 text-zinc-950 hover:border-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  <span>{pricing.linkName}</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <LuArrowUpRight></LuArrowUpRight>
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Built for */}
        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-200 pt-5 text-sm md:flex-row md:items-center md:gap-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            Built for
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-zinc-800">
            <span>Restaurants & cafés</span>
            <span>Household services</span>
            <span>Property & real estate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
