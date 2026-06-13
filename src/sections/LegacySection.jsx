import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Years of Innovation', value: 30, suffix: '+' },
  { label: 'Participants', value: 100000, suffix: '+' },
  { label: 'Events', value: 500, suffix: '+' },
  { label: 'Sponsors', value: 100, suffix: '+' },
]

function AnimatedCount({ value, suffix }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    let frame = null
    const duration = 1400
    const start = performance.now()

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setCurrent(Math.floor(value * progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <span>{current.toLocaleString()}{suffix}</span>
}

export default function LegacySection() {
  const timeline = useMemo(
    () => [
      { year: '1994', title: 'First Techfest', detail: 'A visionary engineering showcase began with student passion.' },
      { year: '2004', title: 'Global Collaborations', detail: 'Industry leaders joined the festival to ignite new partnerships.' },
      { year: '2016', title: 'Immersive Design', detail: 'Holographic showcases and interactive labs debuted on the main stage.' },
      { year: '2029', title: 'Quantum Leap', detail: 'Techfest embraced sustainable AI, robotics and space science at scale.' },
    ],
    [],
  )

  return (
    <section id="legacy" className="section-frame page-section relative overflow-hidden py-32">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="max-w-3xl">
          <p className="section-label">Techfest Legacy</p>
          <h2 className="section-title text-white mt-4">30 Years of Innovation with a Cyberpunk Pulse.</h2>
          <p className="section-copy mt-6">
            We celebrate a three-decade journey of transformative events, student pioneers, and engineering breakthroughs that shape the future.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="glass-panel border border-cyan-300/20 p-8 shadow-[0_35px_120px_-70px_rgba(42,179,255,0.6)] rounded-2xl hover:border-cyan-300/40 transition">
              <p className="text-4xl font-extrabold text-cyan-100">
                <AnimatedCount value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {timeline.map((item, index) => (
            <motion.div key={item.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, delay: index * 0.1 }} className="timeline-card glass-panel border border-violet-400/15 p-8 shadow-[0_35px_90px_-80px_rgba(124,58,237,0.45)] rounded-2xl hover:border-violet-400/30 transition">
              <span className="timeline-year text-cyan-300 font-bold text-lg">{item.year}</span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
