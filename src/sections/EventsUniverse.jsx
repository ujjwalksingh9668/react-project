import { motion } from 'framer-motion'
import { FaMeteor } from 'react-icons/fa'

const events = [
  { title: 'Hackathon', description: '24-hour coding marathons with AI, hardware and systems challenges.' },
  { title: 'Robowars', description: 'Autonomous combat robots battle through dynamic arenas.' },
  { title: 'Startup Challenge', description: 'Innovative pitch rounds for founders and product disruptors.' },
  { title: 'Drone Racing', description: 'High-speed aerial circuits and precision pilot experiences.' },
  { title: 'Esports', description: 'Cyber arenas with futuristic team combat and VR sports.' },
  { title: 'Designathon', description: 'Immersive UI/UX sprints with holographic product storytelling.' },
]

export default function EventsUniverse() {
  return (
    <section id="events" className="section-frame page-section relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="section-headline mb-16 text-center">
          <p className="section-label">Events Universe</p>
          <h2 className="section-title text-white mt-4">Futuristic event cards that float, tilt, and glow.</h2>
          <p className="section-copy mx-auto max-w-2xl mt-6">
            Explore the Techfest map of elite challenges, robotics battles, startup pitch zones and immersive design arenas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              className="interactive-card group overflow-hidden rounded-2xl border border-cyan-300/10 bg-[#090b1a]/90 p-7 shadow-[0_28px_90px_-62px_rgba(39,155,255,0.28)] backdrop-blur-xl hover:border-cyan-300/30 transition"
            >
              <div className="icon-ring mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0f1933]/80 text-cyan-200 shadow-[0_0_40px_-10px_rgba(82,208,255,0.25)]">
                <FaMeteor className="text-2xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
              <p className="mt-3 text-slate-300">{event.description}</p>
              <span className="mt-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100 transition group-hover:bg-cyan-500/15">
                Explore
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
