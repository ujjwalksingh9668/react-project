import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const links = [
  { label: 'About Techfest', href: '#legacy' },
  { label: 'Tracks', href: '#galaxy' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#footer' },
]

const socials = [
  { icon: FaDiscord, href: 'https://discord.com', label: 'Discord' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer id="footer" className="section-frame page-section relative overflow-hidden border-t border-cyan-400/10 py-24">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="section-label">About Techfest</p>
          <h3 className="text-3xl font-bold text-white">A premium frontend showcase for visionary engineering.</h3>
          <p className="text-slate-400 leading-relaxed">
            Techfest 30 is built as a responsive, interactive, frontend-only experience with 3D visuals, cinematic scroll, and neon cyberpunk motion.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="interactive-card rounded-2xl border border-cyan-300/10 bg-[#070d18]/70 px-5 py-4 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-100 hover:bg-cyan-500/5">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-8 border-t border-cyan-400/10 pt-8 text-slate-400 sm:flex-row">
        <p className="text-sm">© 2026 Techfest 30. Design only. No backend. No authentication.</p>
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="interactive-card inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#090e1d]/80 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200 hover:bg-cyan-500/10">
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
