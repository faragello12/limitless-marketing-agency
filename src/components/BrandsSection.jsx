import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { revealClipPath, sectionFadeTransition } from "../lib/motion";

const brands = [
  "/images/brands/logo1.png",
  "/images/brands/logo2.png",
  "/images/brands/logo3.png",
  "/images/brands/logo4.png",
  "/images/brands/logo5.png",
];

export default function BrandsSection() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="scene relative min-h-[100vh] overflow-hidden px-6 py-28"
      variants={sectionFadeTransition}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="brands-bg absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.8 }}
        style={{
          backgroundImage: "url('/images/brands/for brands section image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/80" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="text-center">
          <motion.p
            className="chip mx-auto w-fit"
            variants={revealClipPath}
          >
            BRANDS COLLABORATIONS
          </motion.p>

          <motion.h2
            className="mt-6 text-5xl font-semibold md:text-6xl lg:text-7xl"
            variants={revealClipPath}
          >
            Who We Work With
          </motion.h2>

          {/* Brands Logos */}
          <motion.div
            className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#222222] p-8 backdrop-blur"
          >
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{ x: [0, -(100 / brands.length) * brands.length + "%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {Array(3)
                .fill(null)
                .flatMap(() => brands)
                .map((brand, idx) => (
                  <div
                    key={idx}
                    className="min-w-fit h-12 w-24 md:h-14 md:w-32 flex items-center justify-center opacity-80 hover:opacity-100 transition"
                  >
                    <img src={brand} alt={`Brand ${idx + 1}`} className="h-full w-full object-contain" />
                  </div>
                ))}
            </motion.div>
          </motion.div>

          {/* Bottom Content */}
          <motion.h3
            className="mt-20 text-3xl font-semibold md:text-5xl leading-tight"
            variants={revealClipPath}
          >
            For Brands With a Message <br /> And Public Figures With a Mission
          </motion.h3>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-white/75 md:text-lg"
            variants={revealClipPath}
          >
            We support startups, established companies and public figures who are ready to scale with precision campaigns
            and high-end creative execution.
          </motion.p>

          <motion.button
            data-magnetic="true"
            variants={revealClipPath}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:shadow-glow sm:px-8 sm:py-4 sm:text-base"
            onClick={() => {
              navigate('/contact');
              window.scrollTo(0, 0);
            }}
          >
            <span>Let&apos;s Talk Strategy</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
