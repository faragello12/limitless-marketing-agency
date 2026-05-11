import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer } from "../lib/motion";
import Footer from "./Footer";

export default function ContactSection() {
  return (
    <>
      <section className="scene relative px-6 pb-16 pt-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <motion.h2 variants={fadeUp} className="text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
                Let&apos;s Build Something <br className="hidden md:block" /> People <span className="text-gold">Remember!</span>
              </motion.h2>
            </motion.div>

            <motion.form
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[2rem] border border-white/10 bg-[#222222] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.3)] md:p-10"
            >
              {["Name", "Email", "Message"].map((field) => (
                <motion.div key={field} variants={fadeUp} className="mb-5">
                  <label className="mb-2 block text-sm text-white/70">{field}</label>
                  {field === "Message" ? (
                    <textarea className="field min-h-[140px]" placeholder={`Write your ${field.toLowerCase()}`} />
                  ) : (
                    <input className="field" placeholder={`Your ${field.toLowerCase()}`} />
                  )}
                </motion.div>
              ))}
              <motion.button
                data-magnetic="true"
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                className="mt-2 w-full rounded-full bg-gold py-3 text-sm font-medium text-black transition hover:shadow-glow"
                onClick={() => {
                  window.location.href = '/contact';
                  window.scrollTo(0, 0);
                }}
              >
                Submit
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
