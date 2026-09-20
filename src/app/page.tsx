import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Project from "@/components/sections/Projects";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const services = [
  {
    src: "/img/1.jpeg",
    alt: "Website strategy and planning",
    title: "1. Strategy & Conversion Mapping",
    desc: "Membedah alur bisnis Anda untuk merancang navigasi yang mengarahkan pengunjung langsung menjadi pembeli.",
  },
  {
    src: "/img/2.jpeg",
    alt: "UI UX design for high conversion",
    title: "2. Premium UI/UX Design",
    desc: "Tampilan visual elegan dan berkelas yang membangun kepercayaan instan bagi calon pembeli F&B dan Real Estate.",
  },
  {
    src: "/img/3.jpeg",
    alt: "Ultra fast web development",
    title: "3. Lightning-Fast Development",
    desc: "Pengembangan web dengan kecepatan muat di bawah 1 detik, responsif di HP, dan siap mendominasi SEO.",
  },
  {
    src: "/img/4.jpeg",
    alt: "Website launch and growth",
    title: "4. Launch & Revenue Growth",
    desc: "Website resmi mengudara dan siap mengubah setiap klik menjadi reservasi, *inquiry*, dan transaksi nyata.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Project />
        <Pricing />
      </main>

      <Footer />
    </>
  );
}
