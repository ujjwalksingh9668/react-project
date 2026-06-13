import { useEffect, useState } from 'react'

const targetDate = new Date('2026-12-10T09:00:00')

function pad(value) {
  return String(value).padStart(2, '0')
}

export default function CountdownSection() {
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = Math.max(targetDate - now, 0)
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setCountdown({ days: pad(days), hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="countdown" className="section-frame page-section relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="section-headline mb-16 text-center">
          <p className="section-label">Countdown</p>
          <h2 className="section-title text-white mt-4">Prepare for the future. The main experience begins soon.</h2>
          <p className="section-copy mx-auto max-w-2xl mt-6">
            The countdown is live for Techfest 30 — a cinematic launch of engineering, design, and cyberpunk innovation.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-cyan-300/10 bg-[#02040f]/80 p-10 shadow-[0_40px_120px_-90px_rgba(35,186,255,0.35)]">
          <div className="energy-ring" />
          <div className="grid gap-6 sm:grid-cols-4">
            {Object.entries(countdown).map(([label, value]) => (
              <div key={label} className="glass-panel rounded-xl border border-white/10 bg-[#06102a]/80 p-6 text-center shadow-[0_20px_45px_-30px_rgba(60,169,255,0.25)] hover:border-cyan-300/30 transition">
                <p className="text-5xl font-semibold text-white">{value}</p>
                <p className="mt-3 uppercase tracking-[0.35em] text-sm text-cyan-200/80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
