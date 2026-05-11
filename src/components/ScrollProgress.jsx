import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left bg-gold" style={{ scaleX }} />;
}
