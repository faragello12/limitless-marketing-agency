import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const x = useSpring(0, { stiffness: 260, damping: 25, mass: 0.35 });
  const y = useSpring(0, { stiffness: 260, damping: 25, mass: 0.35 });

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e) => {
      if (e.target.closest("[data-magnetic='true']")) setHovering(true);
    };
    const onOut = (e) => {
      if (e.target.closest("[data-magnetic='true']")) setHovering(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[110] hidden md:block">
      <motion.div className="cursor-dot" style={{ x, y }} animate={{ scale: hovering ? 1.35 : 1 }} />
      <motion.div
        className="cursor-ring"
        style={{ x, y }}
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.95 : 0.7 }}
      />
    </div>
  );
}
