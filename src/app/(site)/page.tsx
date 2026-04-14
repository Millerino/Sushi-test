import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-bg-primary">
        {/* Decorative Japanese character */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="font-playfair text-[30vw] text-white/[0.03] leading-none">
            寿
          </span>
        </div>

        {/* Decorative lines */}
        <div aria-hidden="true" className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#222] to-transparent" />
        <div aria-hidden="true" className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#222] to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          {/* Tagline prefix */}
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-accent mb-6 animate-fade-in">
            Oslo · Japansk Sushi
          </p>

          {/* Red accent line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-12 md:w-20 h-px bg-accent" />
            <span className="text-accent text-xl">✦</span>
            <span className="block w-12 md:w-20 h-px bg-accent" />
          </div>

          {/* Restaurant name */}
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight tracking-wide mb-6 animate-slide-up">
            Sushi of Life
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 font-light tracking-wide animate-slide-up">
            Autentisk japansk sushi<br className="hidden sm:block" /> i hjertet av Oslo
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Link
              href="/meny"
              className="inline-block px-10 py-4 bg-accent text-white text-sm tracking-widest uppercase hover:bg-[#d63350] transition-all duration-300 hover:scale-105"
            >
              Se menyen
            </Link>
            <Link
              href="/kontakt"
              className="inline-block px-10 py-4 border border-white/20 text-white/70 text-sm tracking-widest uppercase hover:border-white/60 hover:text-white transition-all duration-300"
            >
              Finn oss
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <span className="block w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#222] bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: '🍣',
              title: 'Ferske råvarer',
              text: 'Vi bruker kun de beste og ferskeste ingrediensene hver dag.',
            },
            {
              icon: '🎌',
              title: 'Japansk tradisjon',
              text: 'Oppskrifter og teknikker hentet rett fra Japan.',
            },
            {
              icon: '📍',
              title: 'Midt i Oslo',
              text: 'Sentralt beliggende på Haakon VII Gate 5B.',
            },
          ].map(({ icon, title, text }) => (
            <div key={title} className="flex flex-col items-center gap-3 py-4">
              <span className="text-3xl" role="img" aria-hidden="true">{icon}</span>
              <h3 className="font-playfair text-lg text-white">{title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Vår Meny</p>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6 leading-tight">
            Opplev smakene<br />fra Japan
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed mb-10">
            Fra klassisk nigiri til kreative rolls – vi har noe for alle.
            Utforsk vår meny av nøye utvalgte sushiretter og pakker.
          </p>
          <Link
            href="/meny"
            className="inline-block px-12 py-4 bg-accent text-white text-sm tracking-widest uppercase hover:bg-[#d63350] transition-all duration-300 hover:scale-105"
          >
            Se full meny
          </Link>
        </div>
      </section>

      {/* Opening hours teaser */}
      <section className="border-t border-[#222] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-2">Åpningstider</p>
            <p className="font-playfair text-2xl md:text-3xl text-white">Mandag – Fredag</p>
            <p className="text-text-muted mt-1">11.00 – 20.00</p>
          </div>
          <div className="w-px h-16 bg-[#222] hidden md:block" />
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-text-muted mb-2">Lørdag – Søndag</p>
            <p className="font-playfair text-2xl md:text-3xl text-white/40">Stengt</p>
          </div>
          <div className="w-px h-16 bg-[#222] hidden md:block" />
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-2">Adresse</p>
            <p className="font-playfair text-2xl md:text-3xl text-white">Haakon VII Gate 5B</p>
            <p className="text-text-muted mt-1">0161 Oslo</p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 px-8 py-3 border border-[#333] text-sm tracking-widest uppercase text-white/60 hover:border-accent hover:text-accent transition-all duration-300"
          >
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  )
}
