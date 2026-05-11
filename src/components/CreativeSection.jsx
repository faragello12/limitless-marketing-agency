import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { sectionFadeTransition } from "../lib/motion";

export default function CreativeSection() {
  const navigate = useNavigate();
  return (
    <motion.section
      className="scene relative overflow-hidden px-6 py-24"
      variants={sectionFadeTransition}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="creative-bg" />
      <div className="mx-auto relative z-10 max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <p className="chip mx-auto inline-flex">Partnership</p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                <span className="block">Creative + Marketing =</span>
                <span className="block mt-3">Complete Brand Power</span>
              </h2>
              <p className="mt-6 text-white/70 sm:text-lg">
                We collaborate with our sister company, Limited Media Production, to create campaigns that are not just beautifully made but strategically distributed.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300 sm:w-auto"
              onClick={() => {
                navigate('/about');
                window.scrollTo(0, 0);
              }}
            >
              <span>Explore Our Creative Work</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-black">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid justify-items-center gap-6 rounded-3xl border border-white/10 bg-[#222222] p-6 sm:p-8 md:grid-cols-[1fr_auto_1fr] md:justify-items-stretch">
          <motion.div
            className="flex items-center justify-center rounded-3xl border border-white/15 bg-[#222222] p-6 sm:p-8 shadow-black/20"
          >
            <img src="/images/mission/limitless logo.png" alt="Limitless Marketing Agency" className="h-20 w-auto object-contain sm:h-24" />
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
          >
             <img src="/images/mission/infinity icon.png" alt="infinity icon" className="h-10 w-auto object-contain sm:h-14" />
          </motion.div>

          <motion.div
            className="flex items-center justify-center rounded-3xl border border-white/15 bg-[#222222] p-6 sm:p-8 shadow-black/20"
          >
            <img src="/images/mission/limited logo.png" alt="Limited Media Production" className="h-20 w-auto object-contain sm:h-24" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
