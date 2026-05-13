import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useLenis } from "../hooks/useLenis";
import { revealClipPath, sectionFadeTransition, staggerContainer, fadeUp } from "../lib/motion";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import CinematicLoader from "../components/CinematicLoader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WebsiteCreation() {
  useLenis();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const websites = [
    { title: "Business Websites", icon: "/images/website/business.svg" },
    { title: "Landing Pages", icon: "/images/website/landing.svg" },
    { title: "Personal Brand Sites", icon: "/images/website/personal brand.svg" },
    { title: "Event Pages", icon: "/images/website/event.svg" },
    { title: "Funnels", icon: "/images/website/funnels.svg" }
  ];

  const process = [
    "Discovery & Brief",
    "Wireframe & Design",
    "Development",
    "Launch & Optimize"
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
        <section className="scene relative flex min-h-screen items-center justify-center px-6 pt-28 lg:pt-0">
          <div className="hero-glow" />
          <motion.div
            className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="text-center lg:text-left">
              <motion.p className="chip mb-6" variants={fadeUp}>Website Creation</motion.p>
              <h1 className="hero-title hero-title-left text-[38px] font-semibold leading-[1.02] md:text-[52px] lg:text-[74px]">
                <span className="hero-line hero-line-top lg:mb-5 hero-line-left">
                  <span>Websites That Work and</span>
                </span>
                <span className="hero-line hero-line-bottom hero-line-left">
                  <span className="gold-swipe hero-seen text-[#161616]">Convert</span>
                </span>
              </h1>
              <motion.p className="mt-8 max-w-2xl text-white/70 md:text-xl lg:mx-0" variants={fadeUp}>
                From sleek brand sites to fast-loading landing pages, we create websites with a purpose.
              </motion.p>
              <motion.button
                data-magnetic="true"
                variants={revealClipPath}
                className="mt-10 inline-flex w-full max-w-[320px] items-center justify-center gap-4 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition sm:max-w-none sm:w-auto sm:px-8 sm:py-4 sm:text-base lg:justify-start"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo(0, 0);
                }}
              >
                <span>Request a Web Quote</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.button>
            </div>

            <motion.div className="relative mx-auto w-full max-w-[700px]" variants={fadeUp}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#222222]/60 shadow-glow">
                <img
                  src="/images/website/hero.png"
                  alt="Website creation hero"
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* What We Build Section */}
        <motion.section
          className="scene relative z-10 px-6 py-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <motion.p className="chip" variants={fadeUp}>What We Build</motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
                Websites That <span className="text-gold">Deliver</span>
              </motion.h2>
            </div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {websites.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group rounded-[2rem] border border-white/10 bg-[#222222] p-6 transition duration-500 hover:border-gold/45 hover:shadow-glow sm:p-8"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/5">
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <h3 className="mt-8 text-2xl font-medium text-white sm:text-3xl">{item.title}</h3>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Our Process Section */}
        <motion.section
          className="scene relative z-10 px-6 py-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <motion.p className="chip" variants={fadeUp}>Our Process</motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
                From Idea to <span className="text-gold">Launch</span>
              </motion.h2>
            </div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {process.map((item, index) => (
                <motion.article
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group rounded-[2rem] border border-white/10 bg-[#222222] p-6 transition duration-500 hover:border-gold/45 hover:shadow-glow sm:p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <span className="text-lg font-semibold">{index + 1}</span>
                  </div>
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
            <motion.h2 variants={fadeUp} className="text-4xl font-semibold leading-[1.02] md:text-6xl xl:text-5xl">
              Your Website Is More Than a Page <br className="hidden md:block" /> It&apos;s Proof of Who You <span className="text-gold">Are.</span>
            </motion.h2>
            <motion.button
              data-magnetic="true"
              variants={revealClipPath}
              className="mt-10 inline-flex w-full max-w-[320px] items-center justify-center gap-4 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition sm:max-w-none sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
            >
              <span>Start Your Website Now</span>
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