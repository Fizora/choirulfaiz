import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Project from "@/components/sections/Projects";
import Steps from "@/components/sections/Steps";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Project />
        <Steps />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
