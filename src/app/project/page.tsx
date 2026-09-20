import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import Navbar from "@/components/Navbar";
import { allProjects } from "@/components/constant/data";
import Footer from "@/components/Footer";

export default function Project() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="min-h-screen">
          <div className="container mx-auto px-4 py-20">
            {/* Header */}
            <div className="space-y-6 border-b border-gray-300 py-20">
              <p className="uppercase tracking-[0.22em] text-sm text-gray-500">
                Selected work
              </p>

              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
                  A collection of things I&apos;ve made.
                </h1>

                <p className="max-w-sm text-lg leading-relaxed text-gray-600">
                  A selection of product, brand, and web experiences designed to
                  make digital products clearer and more useful.
                </p>
              </div>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 py-20 md:grid-cols-2">
              {allProjects.map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  target="_blank"
                  className="group block"
                >
                  {/* Image */}
                  <div className="relative aspect-4/3 overflow-hidden bg-gray-200">
                    <Image
                      src={project.img}
                      alt={`${project.name} project preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                      <div className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View project
                        <LuArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Project information */}
                  <div className="flex justify-between gap-6 py-5">
                    <div className="space-y-4">
                      <h2 className="text-3xl transition-all duration-300 group-hover:underline">
                        {project.name}
                      </h2>

                      <p className="max-w-sm text-lg leading-relaxed text-gray-600">
                        {project.desc}
                      </p>
                    </div>

                    <div className="shrink-0 space-y-6 text-right text-sm text-gray-500">
                      <p>{project.type}</p>
                      <p>{project.year}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
