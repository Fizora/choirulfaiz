import Link from "next/link";

const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/fizoraaa/",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fizoraa/",
    },
    {
      name: "GitHub",
      url: "https://github.com/fizora",
    },
  ];

  return (
    <footer aria-label="Footer" className=" bg-black text-white">
      <div className="mx-auto w-full max-w-7xl py-16">
        {/* Main content */}
        <div className="px-4 md:px-8 flex flex-col gap-12 md:flex-row md:items-start md:justify-between pb-40">
          {/* Brand */}
          <div className="max-w-md">
            <a
              href="/"
              className="inline-block text-2xl font-semibold tracking-tight text-white transition-colors hover:text-zinc-300 font-mono"
            >
              MCF - DEV
            </a>

            <p className="mt-5 text-xl leading-relaxed text-zinc-400">
              Full-stack developer building modern, reliable, and
              conversion-focused digital experiences.
            </p>
          </div>

          {/* Social links */}
          <nav aria-label="Social media" className="flex flex-col gap-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Connect
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {socialMediaLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Fizoraa on ${link.name}`}
                  className="text-xl text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom */}
        <div className="px-4 md:px-8 mt-16 flex flex-col gap-4 border-t border-white/5 py-8 text-zinc-500 sm:flex-row sm:items-center sm:justify-between text-lg">
          <p>
            &copy; {new Date().getFullYear()} MCF - DEV. All rights reserved.
          </p>
          <p>Develop website with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
