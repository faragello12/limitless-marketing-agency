import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/social-media" },
    { name: "Contact Us", path: "/contact" }
  ];
  const socials = ["Instagram", "YouTube", "TikTok", "LinkedIn"];

  return (
    <footer className="px-6 py-16">
      <div className="mx-auto max-w-[1440px] rounded-[2rem] border border-white/10 bg-[#222222] p-5 sm:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-[1fr_auto]">
          <div className="col-span-full flex justify-center md:justify-start">
            <img src="/images/logo.svg" alt="Limitless" className="h-10 w-auto sm:h-12" />
          </div>

          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.24em] text-gold">Email:</p>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white break-all sm:break-normal">info@limitlessmarketingagency.net</p>
          </div>

          <div className="text-center md:text-left">
            <span className="text-xs sm:text-sm uppercase tracking-[0.24em] text-gold">Menu:</span>
            <div className="mt-2 sm:mt-3 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 md:justify-end">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="transition hover:text-gold">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 border-t border-white/10 pt-4 sm:pt-6">
          <div className="flex flex-col gap-3 sm:gap-4 text-xs sm:text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-white/80 sm:justify-start">
              <span className="font-semibold text-gold text-xs sm:text-sm">Follow Us:</span>
              <span className="flex flex-wrap items-center gap-1 sm:gap-2 text-white/80">
                {socials.map((network, index) => (
                  <span key={network} className="transition hover:text-gold text-xs sm:text-sm">
                    {network}{index < socials.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </span>
            </div>

            <p className="text-center text-xs sm:text-sm sm:text-right">© Limitless Marketing Agency – Built to Grow.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
