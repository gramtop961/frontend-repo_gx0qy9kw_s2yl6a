import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#committees', label: 'Committees' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#registration', label: 'Register' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">
            <span className="text-slate-900">Rhetorix</span>
            <span className="text-blue-600"> MUN</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-700 hover:text-blue-600 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#registration" className="inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold shadow hover:bg-blue-700 transition-colors">
              Apply Now
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#registration" className="block rounded-md px-3 py-2 bg-blue-600 text-white font-semibold" onClick={() => setOpen(false)}>
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
