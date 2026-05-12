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

const BrandsSection = lazy(() => import("../components/BrandsSection"));

export default function AboutUs() {
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

  const apartItems = [
    {
      title: "Specialized Teams",
      body: "Experts in strategy, content, media, and influence",
      icon: "/images/about us assets/Specialized Teams icon.png"
    },
    {
      title: "Cross-Platform Focus",
      body: "From TikTok to Meta to offline events",
      icon: "/images/about us assets/Cross-Platform Focus icon.png"
    },
    {
      title: "Creative Partnerships",
      body: "With Limited Media Production for premium visuals",
      icon: "/images/about us assets/Creative Partnerships icon.png"
    },
    {
      title: "Human-Centered Approach",
      body: "Built around your voice, not just algorithms",
      icon: "/images/about us assets/Human-Centered Approach icon.png"
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
                <span>A New Kind</span>
                <span>of Marketing</span>
                <span className="gold-swipe hero-seen text-[#161616]">Partner</span>
              </span>
            </h1>
            <motion.p className="mx-auto mt-8 max-w-2xl text-white/70 md:text-xl" variants={fadeUp}>
              We blend data-backed strategy, storytelling, and real influence to help brands grow where it matters most.
            </motion.p>
            <motion.div
              className="relative mx-auto mt-16 max-w-[1140px] overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#111111]/70 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:mt-20"
              variants={fadeUp}
            >
              <img
                src="/images/about us assets/hero photo.png"
                alt="About Us hero"
                className="h-[360px] w-full object-cover sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/90 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Who We Are Section */}
        <motion.section
          className="scene relative z-10 px-6 py-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.p className="chip" variants={fadeUp}>Who We Are</motion.p>
                <motion.h2
                  variants={fadeUp}
                  className="mt-4 text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl"
                >
                  Not Just Another <br className="hidden md:block" /> <span className="text-gold">Agency</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg text-white/70 md:text-xl">
                  Limitless is a modern marketing agency made up of strategists, creatives, PR experts, and influencer connectors.
                  We bring a mix of performance, branding, and cultural awareness — helping brands and public figures stay relevant and rise.
                </motion.p>
               
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#111111]/60 shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
              >
                <img
                  src="/images/about us assets/who we are section.png"
                  alt="Who We Are section"
                  className="h-[440px] w-full object-cover sm:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/85 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What Sets Us Apart Section */}
        <motion.section
          className="scene relative z-10 px-6 py-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center">
              <motion.p className="chip" variants={fadeUp}>WHY CHOOSE US</motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
                What Sets <span className="text-gold">Limitless</span> Apart
              </motion.h2>
            </div>

            <motion.div
              className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {apartItems.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group rounded-[2.75rem] border border-white/10 bg-[#131313] p-8 transition duration-500 hover:border-gold/45 hover:bg-white/5"
                >
                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-white/5 text-gold shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                    <img src={item.icon} alt={`${item.title} icon`} className="h-12 w-12 object-contain" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-base text-white/70 sm:text-sm">{item.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>


        {/* Final CTA Section */}
        <motion.section
          className="scene relative px-6 pb-16 pt-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto max-w-[1440px] text-center">
            <motion.h2 variants={fadeUp} className="text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
              We Don&apos;t Just Market — <br className="hidden md:block" /> We Move <span className="text-gold">Brands Forward</span>
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
              <span>Let&apos;s Start With a Conversation</span>
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