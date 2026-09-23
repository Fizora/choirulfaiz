import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Geist,
  Geist_Mono,
  Google_Sans,
  IBM_Plex_Serif,
  Michroma,
  Noto_Serif_JP,
} from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Google_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Michroma({
  variable: "--font-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Choirul Faiz - Software Engineer",
  description:
    "Full Stack Engineer - Base in Indonesia - Web Developer for High Quality Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full text-sm antialiased scrollbar-thin `}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
