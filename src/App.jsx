import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { revealClipPath, sectionFadeTransition, staggerContainer, fadeUp } from "./lib/motion";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import CinematicLoader from "./components/CinematicLoader";
import Navbar from "./components/Navbar";

const ServicesSection = lazy(() => import("./components/ServicesSection"));
const BrandsSection = lazy(() => import("./components/BrandsSection"));
const TimelineSection = lazy(() => import("./components/TimelineSection"));
const CreativeSection = lazy(() => import("./components/CreativeSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

export default function App() {
  useLenis();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <div className="site-global-bg" />
      <CinematicLoader done={loaded} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <div className="grain-overlay" />

      <main className={`relative z-10 transition-all duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}`}>
        <section className="scene hero-scene relative flex min-h-screen items-center justify-center px-6">
          <div className="hero-glow" />
          <motion.div className="floating-icon icon-a" animate={{ y: [0, -30, 0], rotate: [-8, -3, -8] }} transition={{ duration: 8, repeat: Infinity }}>
            <img src="/images/hero/youtube (1) 1.png" alt="YouTube icon" className="object-contain" />
          </motion.div>
          <motion.div className="floating-icon icon-b" animate={{ y: [0, 30, 0], rotate: [12, 6, 12] }} transition={{ duration: 9, repeat: Infinity }}>
            <img src="/images/hero/instagram (1) 1icon.png" alt="Instagram icon" className="object-contain" />
          </motion.div>
          <motion.div className="floating-icon icon-c" animate={{ y: [0, -30, 0], rotate: [-12, -4, -12] }} transition={{ duration: 10, repeat: Infinity }}>
            <img src="/images/hero/facebook icon.png" alt="Facebook icon" className="object-contain" />
          </motion.div>
          <motion.div className="floating-icon icon-d" animate={{ y: [0, 30, 0], rotate: [10, 3, 10] }} transition={{ duration: 11, repeat: Infinity }}>
            <img src="/images/hero/tiktok 1.png" alt="TikTok icon" className="object-contain" />
          </motion.div>
          <motion.div
            className="relative z-10 mx-auto mt-10 max-w-[1440px] text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="hero-title text-[38px] font-semibold leading-[1.02] md:text-[52px] lg:text-[74px]">
              <span className="hero-line hero-line-top lg:mb-5">
                <span>Your</span>
                <span>Brand</span>
                <span className="gold-swipe hero-seen text-[#161616]">Seen,</span>
              </span>
              <span className="hero-line hero-line-bottom">
                <span>Heard</span>
                <img src="/images/hero/hero icon.png" alt="Megaphone icon" className="hero-inline-icon" />
                <span>Remembered.</span>
              </span>
            </h1>
            <motion.p className="mx-auto mt-8 max-w-2xl text-white/70 md:text-xl" variants={fadeUp}>
              We are Limitless, a cinematic marketing agency blending strategy, storytelling and influence into unforgettable
              brand impact.
            </motion.p>
            <motion.button
              data-magnetic="true"
              variants={revealClipPath}
              className="mt-10 inline-flex w-full max-w-[320px] items-center justify-center gap-4 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition sm:max-w-none sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                navigate('/about');
                window.scrollTo(0, 0);
              }}
            >
              <span>Let&apos;s Build Your Presence</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </section>

        <Suspense fallback={<div className="h-40" />}>
          <ServicesSection />
          <BrandsSection />
          <TimelineSection />
          <CreativeSection />
          <ContactSection />
        </Suspense>
      </main>
    </div>
  );
}
