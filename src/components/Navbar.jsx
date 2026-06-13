import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: 'Legacy', href: '#legacy' },
  { label: 'Tracks', href: '#galaxy' },
  { label: 'Events', href: '#events' },
  { label: 'Tech Lab', href: '#lab' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Countdown', href: '#countdown' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-[#03040b]/95 border-b border-cyan-400/10 shadow-lg' : 'bg-transparent'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-black uppercase tracking-[0.35em] text-cyan-100 hover:text-cyan-300 transition">
            TF30
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-[0.25em] text-slate-300 transition hover:text-cyan-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#countdown"
            className="hidden md:inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200 transition hover:bg-cyan-500/20 hover:border-cyan-400/60"
          >
            Join Event
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-200 text-2xl transition hover:text-cyan-300"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cyan-400/10 bg-[#03040b]/98 py-6"
          >
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm uppercase tracking-[0.25em] text-slate-300 transition hover:text-cyan-300 pl-2"
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full mt-6 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200 transition hover:bg-cyan-500/20">
                Join Event
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
