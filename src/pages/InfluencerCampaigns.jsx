import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLenis } from "../hooks/useLenis";
import { revealClipPath, sectionFadeTransition, staggerContainer, fadeUp } from "../lib/motion";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import CinematicLoader from "../components/CinematicLoader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InfluencerCampaigns() {
  useLenis();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatWeDo = [
    "Creator Strategy & Vetting",
    "Campaign Coordination",
    "Content Briefs & Deliverables",
    "UGC Collection & Repurposing",
    "Reporting & Analytics"
  ];

  const useCases = [
    "Product Launches",
    "Service Awareness",
    "Event Buzz",
    "Cross-platform Virality"
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">
      <div className="site-global-bg" />
      <CinematicLoader done={loaded} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <div className="grain-overlay" />

      <main className={`relative z-10 transition-all duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}`}>
        {/* Hero Section */}
        <section className="scene relative flex min-h-screen items-center justify-center px-6">
          <div className="hero-glow" />
          <motion.div
            className="relative z-10 mx-auto mt-10 max-w-[1440px] text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="hero-title text-[38px] font-semibold leading-[1.02] md:text-[52px] lg:text-[74px]">
              <span className="hero-line hero-line-top lg:mb-5">
                <span>Campaigns That Leverage</span>
                <span>Real</span>
                <span className="gold-swipe hero-seen text-[#161616]">Influence</span>
              </span>
            </h1>
            <motion.p className="mx-auto mt-8 max-w-2xl text-white/70 md:text-xl" variants={fadeUp}>
              We connect brands with creators who move audiences — authentically and at scale.
            </motion.p>
            <motion.button
              data-magnetic="true"
              variants={revealClipPath}
              className="mt-10 inline-flex w-full max-w-[320px] items-center justify-center gap-4 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition sm:max-w-none sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.location.href = '/contact';
                window.scrollTo(0, 0);
              }}
            >
              <span>Book an Influencer Session</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </section>

        {/* What We Do Section */}
        <motion.section
          className="scene relative z-10 px-6 py-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <motion.p className="chip" variants={fadeUp}>What We Do</motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
                Full Campaign <span className="text-gold">Management</span>
              </motion.h2>
            </div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {whatWeDo.map((item) => (
                <motion.article
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group rounded-[2rem] border border-white/10 bg-[#222222] p-6 transition duration-500 hover:border-gold/45 hover:shadow-glow sm:p-8"
                >
                  <h3 className="text-2xl font-medium text-white sm:text-3xl">{item}</h3>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <motion.section
          className="scene relative z-10 px-6 py-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <motion.p className="chip" variants={fadeUp}>Use Cases</motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
                Perfect For <span className="text-gold">Your Goals</span>
              </motion.h2>
            </div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {useCases.map((item) => (
                <motion.article
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group rounded-[2rem] border border-white/10 bg-[#222222] p-6 transition duration-500 hover:border-gold/45 hover:shadow-glow sm:p-8"
                >
                  <h3 className="text-2xl font-medium text-white sm:text-3xl">{item}</h3>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="scene relative px-6 pb-16 pt-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px] text-center">
            <motion.h2 variants={fadeUp} className="text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
              Today&apos;s Audience Trusts People — <br className="hidden md:block" /> Not <span className="text-gold">Brands.</span>
            </motion.h2>
            <motion.button
              data-magnetic="true"
              variants={revealClipPath}
              className="mt-10 inline-flex w-full max-w-[320px] items-center justify-center gap-4 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition sm:max-w-none sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.location.href = '/contact';
                window.scrollTo(0, 0);
              }}
            >
              <span>Let&apos;s Collaborate with Creators</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.section>

        <Footer />
      </main>
    </div>
  );
}