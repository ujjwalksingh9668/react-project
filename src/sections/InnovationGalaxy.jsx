import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaBrain, FaLeaf, FaRocket, FaRobot, FaSatelliteDish, FaShieldAlt } from 'react-icons/fa'

const tracks = [
  {
    name: 'AI & ML',
    color: '#67f5ff',
    icon: FaBrain,
    description: 'Machine learning competitions, neural networks, and AI ethics workshops.',
    summary: 'A structured path for teams building intelligent systems, prediction engines, and automation-first prototypes.',
    format: 'Model sprints, live demos, and guided workshops',
    outcome: 'Prototype data products that are fast, usable, and responsible.',
    focus: ['Predictive models', 'Computer vision', 'Responsible AI'],
  },
  {
    name: 'Sustainability',
    color: '#24ff97',
    icon: FaLeaf,
    description: 'Green technology, renewable energy, and eco-innovation.',
    summary: 'Focused on climate-aware engineering ideas with measurable impact across energy, waste, and smart infrastructure.',
    format: 'Problem statements, impact reviews, and solution showcases',
    outcome: 'Turn eco-innovation into practical systems and measurable improvements.',
    focus: ['Clean energy', 'Climate tech', 'Circular systems'],
  },
  {
    name: 'Robotics',
    color: '#a45aff',
    icon: FaRobot,
    description: 'Autonomous systems, robotic challenges, and hardware innovation.',
    summary: 'Built for makers who want cleaner control systems, mechanical precision, and mission-ready autonomous behavior.',
    format: 'Hardware builds, arena tests, and control challenges',
    outcome: 'Design robots that can sense, adapt, and perform under pressure.',
    focus: ['Autonomy', 'Sensor fusion', 'Mechanism design'],
  },
  {
    name: 'Space Tech',
    color: '#6ad8ff',
    icon: FaSatelliteDish,
    description: 'Satellite design, orbital mechanics, and space exploration.',
    summary: 'A dedicated track for orbital systems, communication payloads, and future-facing aerospace thinking.',
    format: 'Mission design, systems reviews, and simulation tasks',
    outcome: 'Translate space concepts into disciplined engineering plans.',
    focus: ['Satellites', 'Mission control', 'Orbital systems'],
  },
  {
    name: 'Cybersecurity',
    color: '#ff62db',
    icon: FaShieldAlt,
    description: 'Secure coding, ethical hacking, and digital defense.',
    summary: 'Organized around defensive engineering, secure architecture, and practical offensive testing in safe environments.',
    format: 'Capture-the-flag, audits, and response drills',
    outcome: 'Build systems that are secure by design, not patched later.',
    focus: ['App security', 'Threat defense', 'Ethical hacking'],
  },
  {
    name: 'Startups',
    color: '#ffb659',
    icon: FaRocket,
    description: 'Pitch competitions, business innovation, and entrepreneurship.',
    summary: 'A sharper innovation lane for founders who need product clarity, market logic, and a compelling launch story.',
    format: 'Pitch rooms, mentor reviews, and go-to-market labs',
    outcome: 'Refine venture ideas into credible, investor-ready narratives.',
    focus: ['Product strategy', 'Pitch design', 'Market fit'],
  },
]

const sectionHighlights = [
  {
    label: 'Track Layout',
    value: '6 curated domains',
    detail: 'Clear separation between research, product, hardware, security, climate, and startup pathways.',
  },
  {
    label: 'Core Focus',
    value: '18 focus streams',
    detail: 'Every track is broken into practical sub-areas so participants can identify their fit quickly.',
  },
  {
    label: 'Experience',
    value: 'Challenges to showcases',
    detail: 'Each stream combines guided workshops, competition rounds, and project-led presentation moments.',
  },
]

export default function InnovationGalaxy() {
  const [activeTrack, setActiveTrack] = useState(tracks[0])
  const ActiveIcon = activeTrack.icon

  return (
    <section id="galaxy" className="section-frame page-section relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="section-headline mb-16 flex flex-col gap-6 text-center">
          <p className="section-label">Innovation Tracks</p>
          <h2 className="section-title text-white">A cleaner, more structured map of every innovation track.</h2>
          <p className="section-copy mx-auto max-w-2xl">
            Explore each domain through a clear track system with focused themes, defined formats, and practical outcomes.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.05fr_1.15fr]">
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="glass-panel relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-[#070a16]/90 p-8 shadow-[0_45px_120px_-80px_rgba(34,179,255,0.35)]"
            style={{ boxShadow: `0 45px 120px -80px ${activeTrack.color}55` }}
          >
            <div className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full blur-3xl" style={{ background: `${activeTrack.color}22` }} />

            <div className="relative flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Featured Track</p>
                <h3 className="mt-4 text-4xl font-bold text-white">{activeTrack.name}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{activeTrack.summary}</p>
              </div>

              <div
                className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-white/10 bg-[#0b1124]/90 text-3xl"
                style={{ color: activeTrack.color, boxShadow: `0 0 40px -16px ${activeTrack.color}` }}
              >
                <ActiveIcon />
              </div>
            </div>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#0a1021]/85 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">Track Theme</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{activeTrack.description}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0a1021]/85 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">Format</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{activeTrack.format}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0a1021]/85 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">Outcome</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{activeTrack.outcome}</p>
              </div>
            </div>

            <div className="relative mt-8">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">Focus Areas</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {activeTrack.focus.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2">
            {tracks.map((track, index) => {
              const Icon = track.icon
              const isActive = activeTrack.name === track.name

              return (
                <motion.button
                  key={track.name}
                  type="button"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                  className={`interactive-card group rounded-[1.75rem] border p-6 text-left transition ${
                    isActive
                      ? 'border-cyan-400/50 bg-[#0b1328]/95 text-cyan-100'
                      : 'border-slate-700/60 bg-[#050813]/95 text-slate-300 hover:border-cyan-400/30 hover:bg-cyan-500/5'
                  }`}
                  style={isActive ? { boxShadow: `0 28px 90px -72px ${track.color}` } : undefined}
                  onClick={() => setActiveTrack(track)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className={`text-xs font-semibold uppercase tracking-[0.35em] ${isActive ? 'text-cyan-200' : 'text-slate-500 group-hover:text-cyan-200'}`}>
                      Track {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-3 w-3 rounded-full" style={{ background: track.color, boxShadow: `0 0 18px ${track.color}` }} />
                  </div>

                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0c1226]/90 text-xl" style={{ color: track.color }}>
                    <Icon />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-white">{track.name}</h3>
                  <p className={`mt-3 text-sm leading-7 ${isActive ? 'text-slate-200' : 'text-slate-400'}`}>{track.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {track.focus.slice(0, 2).map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${isActive ? 'text-cyan-100' : 'text-slate-300 group-hover:text-cyan-100'}`}>
                    View details
                    <FaArrowRight className="text-xs" />
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {sectionHighlights.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[1.75rem] border border-cyan-300/10 bg-[#060915]/85 p-6 shadow-[0_30px_90px_-80px_rgba(34,179,255,0.35)]"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">{item.label}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
