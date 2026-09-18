import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    src: "/img/1.jpeg",
    alt: "Website development project",
  },
  {
    src: "/img/2.jpeg",
    alt: "Frontend development project",
  },
  {
    src: "/img/3.jpeg",
    alt: "Full stack development project",
  },
  {
    src: "/img/4.jpeg",
    alt: "Web application project",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="flex min-h-screen flex-col justify-center px-6 py-20">
          <div className="mx-auto w-full max-w-7xl space-y-6">
            <h1 className="max-w-6xl text-5xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-8xl">
              Hi there, I&apos;m Faiz, a web developer.
            </h1>

            <p className="max-w-2xl leading-relaxed text-gray-600">
              I build fast, modern, and conversion-focused websites and web
              applications for businesses that want to grow online.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-105 hover:bg-gray-800 active:scale-95"
              >
                Start with Me Now
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-gray-200 bg-white px-8 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-gray-100"
              >
                See My Work
              </Link>
            </div>

            {/* Services / projects */}
            <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.src}
                  className="group relative h-94 overflow-hidden rounded-xl"
                >
                  <Image
                    src={service.src}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Blur overlay */}
                  <div className="absolute inset-0 rounded-xl bg-black/10 backdrop-blur-md transition-all duration-500 group-hover:bg-black/0 group-hover:backdrop-blur-0" />

                  {/* Optional content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
                      <p className="text-sm font-medium">View project</p>
                      <span className="text-xs text-white/70">
                        Explore case study
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
