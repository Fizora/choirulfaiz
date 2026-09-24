import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CTA from "@/components/sections/CTA";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen py-20">
        {/* layer */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="py-30 space-y-6">
            <p className="uppercase tracked-[0.22rem] text-gray-500">
              A little about me
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              I build websites where design and performance work together.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between py-40 space-y-6">
            <h2 className="text-4xl md:text-6xl max-w-3xl text-white">
              I work across three main industries: restaurants & cafés, property
              & real estate, and household services. Each project starts with
              understanding the business, its customers, and the action the
              website needs to drive before moving into design and development.
            </h2>
            <div className="max-w-lg text-xl text-gray-400">
              <p>
                I'm an independent web developer from East Java, Indonesia,
                focused on building modern websites for businesses that want a
                stronger presence online. My work combines thoughtful interface
                design, performance-focused development, and clear user journeys
                — so a website doesn't just look good, but helps visitors
                understand the business and take the next step. I'm currently
                developing my portfolio while building Lumentify, a web
                development platform focused on household service businesses.
              </p>
              <br />
              <p>
                My process is collaborative, direct, and rooted in understanding
                the real problem before reaching for the solution.
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
