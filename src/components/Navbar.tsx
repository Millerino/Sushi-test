'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const links = [
    { href: '/meny', label: 'Meny' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#222]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-playfair text-xl md:text-2xl tracking-widest uppercase text-white hover:text-accent transition-colors duration-200"
        >
          Sushi of Life
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 ${
                  pathname === href
                    ? 'text-accent'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/meny"
              className="text-sm tracking-widest uppercase px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200"
            >
              Bestill
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Åpne meny"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col border-t border-[#222] bg-[#0a0a0a]">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block px-6 py-4 text-sm tracking-widest uppercase border-b border-[#222] transition-colors ${
                  pathname === href ? 'text-accent' : 'text-white/70'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/meny"
              className="block px-6 py-4 text-sm tracking-widest uppercase text-accent"
            >
              Bestill
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
