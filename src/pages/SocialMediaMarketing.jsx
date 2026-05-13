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

export default function SocialMediaMarketing() {
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

  const offers = [
    {
      title: "Content Strategy",
      icon: "/images/social media page/content strategy icon.svg"
    },
    {
      title: "Content Creation (Static + Video)",
      icon: "/images/social media page/content creation icon.svg"
    },
    {
      title: "Account Management",
      icon: "/images/social media page/Account management icon.svg"
    },
    {
      title: "Analytics & Reporting",
      icon: "/images/social media page/analytics & reporting icon.svg"
    },
    {
      title: "Platform-Specific Growth Plans (IG, TikTok, LinkedIn, etc.)",
      icon: "/images/social media page/platform growth icon.svg"
    }
  ];

  const whoFor = [
    {
      title: "Startups launching brand presence",
      image: "/images/social%20media%20page/startups%20photo.png"
    },
    {
      title: "Public figures growing communities",
      image: "/images/social%20media%20page/public%20figures.png"
    },
    {
      title: "Brands ready to scale through organic media",
      image: "/images/social%20media%20page/brands%20photo.png"
    }
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
              <motion.p className="chip" variants={fadeUp}>
                Social Media Marketing
              </motion.p>
              <motion.h1
                className="hero-title mt-6 text-[38px] font-semibold leading-[1.02] md:text-[52px] lg:text-[74px] lg:items-start"
                variants={fadeUp}
              >
                <span className="hero-line hero-line-top lg:mb-5 md:justify-start">
                  <span className="lg:text-left">Strategic Social</span>
                  <span className="lg:text-left">That Actually</span>
                  <span className="gold-swipe hero-seen text-[#161616]">Connects</span>
                </span>
              </motion.h1>
              <motion.p className="mx-auto mt-8 max-w-2xl text-white/70 md:text-xl lg:mx-0" variants={fadeUp}>
                We help brands grow communities, drive attention, and stay relevant — across platforms that matter.
              </motion.p>
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
                <span>Book a Strategy Call</span>
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
                  src="/images/social media page/hero.png"
                  alt="Social media marketing hero"
                  className="w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* What We Offer Section */}
        <motion.section
          className="scene relative z-10 px-6 py-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <motion.p className="chip" variants={fadeUp}>What We Offer</motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
                Social Media <span className="text-gold">Services</span>
              </motion.h2>
            </div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {offers.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f0f0f]/95 p-6 transition duration-500 hover:border-gold/40 hover:bg-white/10 hover:shadow-[0_30px_90px_rgba(184,155,30,0.16)] sm:p-7 lg:p-8"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-white/5 border border-white/10 shadow-black/20">
                    <img src={item.icon} alt={`${item.title} icon`} className="h-10 w-10 object-contain" />
                  </div>
                  <h3 className="mt-6 text-[1.15rem] font-semibold leading-tight text-white sm:text-[1.3rem]">
                    {item.title}
                  </h3>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Who It's For Section */}
        <motion.section
          className="scene relative z-10 px-6 py-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <motion.p className="chip" variants={fadeUp}>Who It's For</motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
                Perfect For <span className="text-gold">Your Brand</span>
              </motion.h2>
            </div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {whoFor.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/30 transition duration-500 hover:border-gold/45 hover:shadow-[0_24px_80px_rgba(184,155,30,0.18)]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-fill transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 rounded-[1.75rem] border border-white/10 bg-black/60 px-5 py-6 backdrop-blur-xl shadow-black/50 sm:left-8 sm:right-8">
                    <p className="text-center text-lg font-semibold leading-tight text-white md:text-xl xl:text-2xl">
                      {item.title}
                    </p>
                  </div>
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
              Social is not optional <br className="hidden md:block" /> it&apos;s the front door to your <span className="text-gold">brand.</span>
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
              <span>Let&apos;s Build Your Presence</span>
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