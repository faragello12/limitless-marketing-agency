import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLenis } from "../hooks/useLenis";
import { revealClipPath, sectionFadeTransition, staggerContainer, fadeUp } from "../lib/motion";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import CinematicLoader from "../components/CinematicLoader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
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

  const projectTypes = [
    "Social Media",
    "Ads",
    "Website",
    "Influencers",
    "Not Sure Yet"
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
        <section className="scene relative flex min-h-screen items-center justify-center px-6 pt-28 lg:pt-24">
          <div className="hero-glow" />
          <motion.div
            className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 tablet:px-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.p className="chip mb-6" variants={fadeUp}>Contact Us</motion.p>
            <h1 className="hero-title text-[30px] font-semibold leading-[1.1] sm:text-[38px] md:text-[52px] lg:text-[74px]">
              <span className="hero-line hero-line-top lg:mb-5">
                <span>Let&apos;s Talk</span>
              </span>
              <span className="hero-line hero-line-bottom">
                <span className="gold-swipe hero-seen text-[#161616]">Strategy</span>
              </span>
            </h1>
            <motion.p className="mx-auto mt-8 max-w-2xl text-white/70 md:text-xl" variants={fadeUp}>
              Whether you&apos;re launching, scaling, or rebranding — we&apos;re ready to help.
              Use the form or reach out directly, and let&apos;s build something worth remembering.
            </motion.p>
            <motion.div className="relative mx-auto mt-12 w-full max-w-[1400px]" variants={fadeUp}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#222222]/60 shadow-glow">
                <img
                  src="/images/contact/hero.png"
                  alt="Contact hero"
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section className="scene relative px-4 pb-16 pt-20 sm:px-6 sm:pt-24">
          <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
            <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <motion.h2 variants={fadeUp} className="text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl">
                  Start Your <span className="text-gold">Project</span>
                </motion.h2>
              </motion.div>

              <motion.form
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-[2rem] border border-white/10 bg-[#222222] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.3)] md:p-10"
              >
                {[
                  { name: "Name", type: "text", required: true },
                  { name: "Email", type: "email", required: true },
                  { name: "Company Name", type: "text", required: false },
                  { name: "Phone", type: "tel", required: false },
                  { name: "Project Type", type: "select", required: true, options: projectTypes },
                  { name: "Message", type: "textarea", required: true }
                ].map((field) => (
                  <motion.div key={field.name} variants={fadeUp} className="mb-5">
                    <label className="mb-2 block text-sm text-white/70">
                      {field.name}{field.required ? " *" : " (optional)"}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        className="field min-h-[140px]"
                        placeholder={`Write your ${field.name.toLowerCase()}`}
                        required={field.required}
                      />
                    ) : field.type === "select" ? (
                      <select className="field" required={field.required}>
                        <option value="">Select project type</option>
                        {field.options.map((option) => (
                          <option key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        className="field"
                        type={field.type}
                        placeholder={`Your ${field.name.toLowerCase()}`}
                        required={field.required}
                      />
                    )}
                  </motion.div>
                ))}
                <motion.button
                  data-magnetic="true"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ y: -2 }}
                  className="mt-2 w-full rounded-full bg-gold py-3 text-sm font-medium text-black transition hover:shadow-glow"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <motion.section
          className="scene relative z-10 px-6 py-24"
          variants={sectionFadeTransition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
        >
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <motion.div variants={fadeUp} className="text-center md:text-left">
                <h3 className="mb-4 text-2xl font-semibold text-white">Email</h3>
                <a
                  href="mailto:info@limitlessmarketingagency.net"
                  className="text-base sm:text-lg text-white/70 block max-w-full mb-4 break-all whitespace-normal hover:text-gold"
                >
                  info@limitlessmarketingagency.net
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="text-center md:text-left">
                <h3 className="mb-4 text-2xl font-semibold text-white">Phone</h3>
                <a
                  href="tel:+201011042862"
                  className="text-base sm:text-lg text-white/70 block mb-4 break-all whitespace-normal hover:text-gold"
                >
                  +20 101 104 2862
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="text-center md:text-left">
                <h3 className="mb-4 text-2xl font-semibold text-white">Address</h3>
                <p className="text-base sm:text-lg text-white/70 block mb-4 break-all whitespace-normal">3 Labib Al Batanony, Manyal, Cairo, Egypt</p>
              </motion.div>

              <motion.div variants={fadeUp} className="text-center md:text-left">
                <h3 className="mb-4 text-2xl font-semibold text-white">Social Links</h3>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white/70 hover:text-gold transition">Facebook</a>
                  <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white/70 hover:text-gold transition">TikTok</a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white/70 hover:text-gold transition">IG</a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white/70 hover:text-gold transition">LinkedIn</a>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-white/70 hover:text-gold transition">YouTube</a>
                </div>
              </motion.div>
            </div>
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
              Your Audience Is Waiting. <br className="hidden md:block" /> Let&apos;s Reach <span className="text-gold">Them.</span>
            </motion.h2>
            <motion.button
              data-magnetic="true"
              variants={revealClipPath}
              className="mt-10 inline-flex w-full max-w-[320px] items-center justify-center gap-4 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition sm:max-w-none sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span>Schedule a Call</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.button>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-white/70">
              We typically respond within 24–48 hours.
            </motion.p>
          </div>
        </motion.section>

        <Footer />
      </main>
    </div>
  );
}