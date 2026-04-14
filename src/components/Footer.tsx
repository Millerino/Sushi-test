import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#222] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-playfair text-2xl tracking-widest uppercase text-white mb-3">
              Sushi of Life
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Autentisk japansk sushi<br />i hjertet av Oslo.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-text-muted mb-4">Navigasjon</p>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Forside' },
                { href: '/meny', label: 'Meny' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-text-muted mb-4">Kontakt</p>
            <address className="not-italic space-y-2 text-sm text-white/60">
              <p>Haakon VII Gate 5B</p>
              <p>0161 Oslo</p>
              <p className="pt-1">
                <a href="tel:22830033" className="hover:text-white transition-colors">22 83 00 33</a>
              </p>
              <p>
                <a href="mailto:Bilitinh2003@yahoo.no" className="hover:text-white transition-colors">
                  Bilitinh2003@yahoo.no
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© {currentYear} Sushi of Life. Alle rettigheter reservert.</p>
          <p className="tracking-widest uppercase">Oslo, Norge</p>
        </div>
      </div>
    </footer>
  )
}
