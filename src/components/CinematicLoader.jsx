import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center bg-[#050608]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.img
            src="/images/logo.svg"
            alt="Limitless"
            className="w-40"
            initial={{ opacity: 0, y: 18, scale: 1.08 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
