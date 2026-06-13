import { motion } from 'framer-motion'
import { SiGoogle, SiMicrosoft, SiNvidia, SiAmazonaws } from 'react-icons/si'

const sponsors = [
  { name: 'Google', icon: SiGoogle, accent: '#7cb1ff' },
  { name: 'Microsoft', icon: SiMicrosoft, accent: '#7d5cff' },
  { name: 'NVIDIA', icon: SiNvidia, accent: '#5cf4a5' },
  { name: 'AWS', icon: SiAmazonaws, accent: '#ffaf4f' },
]

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="section-frame page-section relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="section-headline mb-16 text-center">
          <p className="section-label">Sponsors</p>
          <h2 className="section-title text-white mt-4">A glowing showcase of our premium partners.</h2>
          <p className="section-copy mx-auto max-w-2xl mt-6">
            Techfest is powered by visionary brands that share the same drive for futuristic engineering and innovation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sponsors.map((sponsor, index) => {
            const Icon = sponsor.icon
            return (
              <motion.div key={sponsor.name} whileHover={{ y: -8 }} className="glass-panel flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-700/70 bg-[#020414]/90 p-8 text-center shadow-[0_30px_90px_-70px_rgba(124,79,255,0.35)] transition hover:border-cyan-400/30 hover:bg-[#0a0f20]/80">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0d1325]/80 text-3xl" style={{ color: sponsor.accent }}>
                  <Icon />
                </div>
                <p className="text-xl font-semibold text-white">{sponsor.name}</p>
                <p className="text-sm leading-6 text-slate-400">Strategic partner in immersive engineering and futuristic experience design.</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
