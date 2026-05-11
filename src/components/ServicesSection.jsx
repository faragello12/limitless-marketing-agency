import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { fadeUp, sectionFadeTransition, staggerContainer } from "../lib/motion";

const services = [
  {
    title: "Social Media Marketing",
    body: "Content, strategy and community building for all major platforms.",
    icon: "/images/services/Group-1.png"
  },
  {
    title: "Media Buying",
    body: "Smart ad placements that turn attention into measurable action.",
    icon: "/images/services/Vector.png"
  },
  {
    title: "Website Creation",
    body: "Custom web experiences built for speed, conversion and brand presence.",
    icon: "/images/services/Group-2.png"
  },
  {
    title: "Influencer Campaigns & UGC",
    body: "Authentic collaborations that scale visibility with creator ecosystems.",
    icon: "/images/services/Vector-1.png"
  }
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="scene relative z-10 px-6 py-24"
      variants={sectionFadeTransition}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="max-w-3xl">
            <motion.p className="chip">Services</motion.p>
            <div className="mt-4 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-base">
                What We Do
              </p>
              <div className="space-y-3">
                <p className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                  Strategy.
                </p>
                <p className="inline-flex items-center rounded-lg bg-gold px-2 py-2 text-4xl font-semibold text-black sm:text-5xl md:text-6xl">
                  Storytelling.
                </p>
                <p className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                  Influence.
                </p>
              </div>
            </div>
          </div>
          <motion.button
            data-magnetic="true"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-1 inline-flex w-full items-center justify-center gap-4 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:shadow-glow sm:w-auto sm:px-8 sm:py-4 sm:text-base md:mt-0 md:min-w-[220px]"
            onClick={() => {
              navigate('/social-media');
              window.scrollTo(0, 0);
            }}
          >
            <span>See All Services</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.button>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {services.map((item) => (
            <Link
              key={item.title}
              to={
                item.title === "Social Media Marketing" ? "/social-media" :
                item.title === "Media Buying" ? "/media-buying" :
                item.title === "Website Creation" ? "/website-creation" :
                item.title === "Influencer Campaigns & UGC" ? "/influencer-campaigns" :
                "/contact"
              }
            >
              <motion.article
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group cursor-pointer rounded-[2rem] border border-white/10 bg-[#222222] p-6 transition duration-500 hover:border-gold/45 hover:shadow-glow sm:p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#222222] p-3 shadow-inner shadow-black/20 sm:h-20 sm:w-20">
                  <img src={item.icon} alt={item.title} className="h-full w-full object-contain" />
                </div>
                <h3 className="text-2xl font-medium text-white sm:text-3xl">{item.title}</h3>
                <p className="mt-4 text-base text-white/70 sm:mt-6 sm:text-sm">{item.body}</p>
                <span className="mt-8 inline-block text-xs uppercase tracking-[0.12em] text-white/80 transition group-hover:text-gold sm:text-sm">
                  Learn More
                </span>
              </motion.article>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
