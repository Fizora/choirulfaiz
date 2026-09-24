import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CTA from "@/components/sections/CTA";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="py-30 space-y-6">
            <p className="uppercase tracking-[0.22em] text-gray-500">
              A little about me
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
              I build websites where design and performance work together.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 py-32">
            {/* Kenapa 3 niche ini — dari sudut pandang founder, bukan pain point pengunjung */}
            <div className="max-w-2xl space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
                Why these industries
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Restaurants, real estate, and household services all live or die
                by the same thing — how fast someone can trust you and act.
              </h3>
            </div>

            {/* Bio — dipersingkat, tapi tetap tentang orangnya, bukan pain point klien */}
            <div className="max-w-md space-y-6 text-lg text-gray-400 md:pt-2">
              <p>
                Independent web developer, East Java. I focus on interface,
                performance, and clarity — so a site does more than look good.
              </p>
              <p>
                Currently building my portfolio while developing Lumentify, a
                platform for household service businesses.
              </p>
              <p className="text-white font-medium">
                Direct process. No unnecessary steps.
              </p>
            </div>
          </div>
        </div>
        <CTA />
      </section>
      <Footer />
    </>
  );
}
