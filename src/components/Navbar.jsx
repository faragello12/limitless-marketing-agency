import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" }
];

const servicesLinks = [
  { name: "Social Media Marketing", path: "/social-media" },
  { name: "Media Buying", path: "/media-buying" },
  { name: "Website Creation", path: "/website-creation" },
  { name: "Influencer Campaigns & UGC", path: "/influencer-campaigns" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="fixed inset-x-0 top-0 z-[90] px-4 pt-6 sm:px-6 tablet:px-10">
      <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-3 tablet:gap-5">
        <img src="/images/logo.svg" alt="Limitless" className="h-12 w-auto opacity-95 tablet:h-16" />

        <nav className="hidden items-center gap-2.5 rounded-full border border-white/10 bg-white/5 p-2.5 backdrop-blur tablet:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`rounded-full px-4 py-2.5 text-[13px] font-medium transition tablet:px-5 tablet:py-2.5 ${
                location.pathname === link.path
                  ? "bg-[#222222] text-gold shadow-[inset_0_0_0_1px_rgba(184,155,30,0.4)]"
                  : "text-white/90 hover:text-gold"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`rounded-full px-4 py-2.5 text-[13px] font-medium transition tablet:px-5 tablet:py-2.5 ${
                servicesLinks.some(link => location.pathname === link.path)
                  ? "bg-[#222222] text-gold shadow-[inset_0_0_0_1px_rgba(184,155,30,0.4)]"
                  : "text-white/90 hover:text-gold"
              }`}
            >
              Services
              <svg
                className={`ml-1 inline-block h-3 w-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-white/10 bg-[#0f1116]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur"
                >
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => {
                        setServicesOpen(false);
                        setOpen(false);
                      }}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                        location.pathname === link.path ? "bg-white/10 text-gold" : "text-white/90 hover:bg-white/5 hover:text-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className={`rounded-full px-4 py-2.5 text-[13px] font-medium transition tablet:px-5 tablet:py-2.5 ${
              location.pathname === "/contact"
                ? "bg-[#222222] text-gold shadow-[inset_0_0_0_1px_rgba(184,155,30,0.4)]"
                : "text-white/90 hover:text-gold"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-2 tablet:gap-3">
          <motion.button
            data-magnetic="true"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden items-center gap-3 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-black tablet:inline-flex"
            onClick={() => {
              navigate('/contact');
              window.scrollTo(0, 0);
            }}
          >
            <span>Get a Quote</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-black">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 tablet:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-4 rounded-[2rem] border border-white/10 bg-[#0f1116]/95 p-4 shadow-2xl shadow-black/30 backdrop-blur tablet:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`rounded-3xl px-4 py-3 text-sm font-medium transition ${
                    location.pathname === link.path ? "bg-white/10 text-gold" : "text-white/90 hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full rounded-3xl px-4 py-3 text-left text-sm font-medium transition ${
                    servicesLinks.some(link => location.pathname === link.path) ? "bg-white/10 text-gold" : "text-white/90 hover:text-gold"
                  }`}
                >
                  Services
                  <svg
                    className={`ml-1 inline-block h-3 w-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-1 overflow-hidden"
                    >
                      {servicesLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => {
                            setServicesOpen(false);
                            setOpen(false);
                          }}
                          className={`block rounded-xl px-4 py-2 text-sm font-medium transition ${
                            location.pathname === link.path ? "bg-white/10 text-gold" : "text-white/70 hover:bg-white/5 hover:text-gold"
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className={`rounded-3xl px-4 py-3 text-sm font-medium transition ${
                  location.pathname === "/contact" ? "bg-white/10 text-gold" : "text-white/90 hover:text-gold"
                }`}
              >
                Contact Us
              </Link>
            </div>
            <motion.button
              data-magnetic="true"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black"
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
            >
              <span>Get a Quote</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-black">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
