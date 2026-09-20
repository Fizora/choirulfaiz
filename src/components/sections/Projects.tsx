import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { highlightProject } from "../constant/data";
import Image from "next/image";

const Project = () => {
  return (
    <section className="min-h-screen border-t border-gray-300">
      {/* layer layout */}
      <div className="mx-auto container py-20 px-4">
        {/* header */}
        <div className="space-y-6">
          <p className=" uppercase tracking-[0.22em]">Selected work</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-4xl md:text-6xl font-bold">
              A few things I've made.
            </h2>
            <Link
              href="/project"
              className="flex items-center max-w gap-4 text-xl hover:underline py-1 px-2 hover:bg-gray-300 transition-all duration-300"
            >
              See More Project
              <LuArrowUpRight></LuArrowUpRight>
            </Link>
          </div>

          {/* highlight project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
            {highlightProject.map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="group transition-all duration-300"
                target="_blank"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-gray-200">
                  <Image
                    alt="image"
                    fill
                    src={`${project.img}`}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  ></Image>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                    <div className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View project
                      <LuArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                <div className="py-5 flex justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl group-hover:underline">
                      {project.name}
                    </h3>
                    <p className="max-w-sm text-xl text-gray-600">
                      {project.desc}
                    </p>
                  </div>
                  <div className="text-right space-y-6">
                    <p>{project.type}</p>
                    <p>{project.year}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* content */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default Project;
