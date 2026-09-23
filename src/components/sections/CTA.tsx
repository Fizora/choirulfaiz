import Image from "next/image";
import { PrimaryButtonLink, SecondaryButtonLink } from "../ui/Button";

const CTA = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white py-20 mt-20 md:mb-40">
      {/* Background Image — dibatasi lebar max-w-7xl, tetap penuh tinggi section, dan center secara horizontal */}
      <div className="absolute inset-y-0 inset-x-0 flex justify-center">
        <div className="relative h-full w-full">
          <Image
            alt="Modern business background"
            src="/img/build.jpg"
            fill
            className="object-cover object-center opacity-60 rounded mask-b-from-50% mask-b-to-90% "
            priority
          />
        </div>
      </div>

      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black/99 backdrop:" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-32 sm:px-8 lg:px-12 lg:py-40">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Ready to grow your business?
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Build a digital presence that{" "}
            <span className="text-zinc-300">actually converts</span>
          </h2>

          <p className="mt-8 font-medium text-xl leading-relaxed text-white">
            Whether you run a restaurant, manage properties, or provide
            household services — I help you attract more customers with a clean,
            fast, and conversion-focused website.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-20 flex flex-col gap-5 sm:flex-row sm:gap-6">
          <PrimaryButtonLink href="">
            Book a Free Consultation
          </PrimaryButtonLink>
          <SecondaryButtonLink href="/#pricing">
            View Pricing
          </SecondaryButtonLink>
        </div>

        {/* Small note */}
        <p className="mt-10 text-sm text-gray-400">
          No pressure. Just a clear conversation about your goals.
        </p>
      </div>
    </section>
  );
};

export default CTA;
