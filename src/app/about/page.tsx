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
              A little context
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Design is how I make sense of things.
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between py-40 space-y-6">
            <h2 className="text-4xl md:text-6xl max-w-3xl text-white">
              I work at the intersection of strategy, design, and technology —
              turning the messy first draft into something people want to use.
            </h2>
            <div className="max-w-lg text-xl text-gray-400">
              <p>
                I'm an independent solo developer based in East java, Indonesia.
                Over the past eight years, I've partnered with early-stage
                founders and established teams to make digital products more
                human.
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
