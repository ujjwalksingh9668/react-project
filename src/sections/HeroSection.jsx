import { motion } from 'framer-motion'

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-x-0 top-0 z-0 h-[34rem] bg-[radial-gradient(circle_at_50%_18%,rgba(72,134,255,0.18),transparent_42%)]" />

      <div className="section-frame relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:px-10">
        <motion.div initial="hidden" animate="visible" variants={heroVariants} className="hero-copy mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex rounded-full border border-[#53b8ff55] bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-200 shadow-glow">
            Techfest 30 • Futuristic Engineering Festival
          </p>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl drop-shadow-lg">
            Beyond Boundaries. <span className="text-[#83b1ff]">Engineering The Future.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Step into a cyberpunk universe of innovation, immersive 3D experiences, and futuristic engineering showcases designed for the next generation of makers.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#legacy" className="interactive-card rounded-full border border-cyan-400/40 bg-[#0b1222]/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-500/15">
              Explore Legacy
            </a>
            <a href="#galaxy" className="interactive-card rounded-full border border-violet-400/30 bg-[#0b1222]/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-200 transition hover:-translate-y-1 hover:bg-violet-500/15">
              Explore Innovation Tracks
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero-footer absolute bottom-10 left-1/2 z-10 w-full -translate-x-1/2 text-center text-sm uppercase tracking-[0.35em] text-slate-400 sm:text-base">
        Scroll to discover the cosmic Techfest narrative
      </div>
    </section>
  )
}
