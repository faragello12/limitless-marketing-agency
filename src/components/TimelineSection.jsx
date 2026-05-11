import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Strategy Session",
    body: "We shape a tailored strategy that maps objectives, channels and timelines."
  },
  {
    n: "02",
    title: "Campaign Planning",
    body: "Clear goals, audience alignment, allocation and channel architecture."
  },
  {
    n: "03",
    title: "Execution & Optimization",
    body: "Launch, monitor and optimize continuously to maximize performance."
  }
];

function StepCard({ step }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -40% 0px", amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      className="grid gap-6 md:grid-cols-[120px_minmax(0,1fr)] items-start"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex justify-start">
        <div
          className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border text-4xl font-semibold transition
            ${isInView ? "border-gold bg-gold/10 text-gold shadow-[0_0_30px_rgba(229,185,33,0.24)]" : "border-white/15 bg-white/5 text-white/30"}`}
        >
          {step.n}
        </div>
      </div>

      <div className={`rounded-[2rem] border p-7 backdrop-blur transition duration-500 ${
        isInView ? "border-gold/40 bg-[#222222] shadow-glow" : "border-white/15 bg-[#222222]"
      }`}>
        <span className="inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-gold/80">
          Step {Number(step.n)}
        </span>
        <h3 className="mt-4 text-3xl font-medium">{step.title}</h3>
        <p className="mt-4 text-white/70">{step.body}</p>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="scene relative px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <p className="chip mx-auto inline-flex">How We Work</p>
          <h2 className="mt-4 text-center text-4xl font-semibold md:text-6xl">Made to Move With You</h2>
        </div>

        <div className="mx-auto mt-16 max-w-[900px] relative md:pl-[100px]">
          <div className="pointer-events-none absolute left-0 top-10 h-[calc(100%-2.5rem)] w-px bg-white/10 md:left-[56px]" />
          <motion.div
            className="pointer-events-none absolute left-0 top-10 h-full w-px bg-gradient-to-b from-gold via-gold/70 to-yellow-600 md:left-[56px]"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {steps.map((step) => (
              <StepCard key={step.n} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
