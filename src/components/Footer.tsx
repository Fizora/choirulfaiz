const Footer = () => {
  const socialMediaLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/fizoraa/",
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
    <footer
      aria-label="Footer"
      className="border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 sm:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="/"
              className="inline-block text-xl font-bold tracking-tight text-white transition-colors hover:text-zinc-300"
            >
              Fizoraa
            </a>

            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Full-stack developer building modern, reliable, and
              conversion-focused digital experiences.
            </p>
          </div>

          {/* Social links */}
          <nav aria-label="Social media" className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Connect
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Fizoraa on ${link.name}`}
                  className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Fizoraa. All rights reserved.</p>

          <p>Designed and built with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
