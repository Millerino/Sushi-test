import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kontakt – Sushi of Life',
  description: 'Kontakt Sushi of Life. Adresse, telefon, epost og åpningstider.',
}

const contactInfo = {
  phone: '22830033',
  phoneFormatted: '22 83 00 33',
  address: 'Haakon VII Gate 5B',
  postalCode: '0161 Oslo',
  email: 'Bilitinh2003@yahoo.no',
  openingHours: [
    { days: 'Mandag – Fredag', hours: '11.00 – 20.00' },
    { days: 'Lørdag – Søndag', hours: 'Stengt' },
  ],
}

function InfoBlock({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-5 items-start py-6 border-b border-[#222] last:border-b-0">
      <div className="mt-0.5 shrink-0 w-10 h-10 flex items-center justify-center border border-[#333] text-accent">
        {icon}
      </div>
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-1">{label}</p>
        {children}
      </div>
    </div>
  )
}

export default function KontaktPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#222]">
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Kontakt oss</p>
        <h1 className="font-playfair text-5xl md:text-6xl text-white mb-6">Finn oss</h1>
        <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
          Vi holder til sentralt i Oslo. Stikk innom eller ta kontakt – vi hjelper deg gjerne.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Contact details */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-8">Kontaktinformasjon</p>

            <InfoBlock
              label="Adresse"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              }
            >
              <address className="not-italic">
                <p className="text-white text-lg font-light">{contactInfo.address}</p>
                <p className="text-text-muted">{contactInfo.postalCode}</p>
              </address>
            </InfoBlock>

            <InfoBlock
              label="Telefon"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              }
            >
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-white text-lg font-light hover:text-accent transition-colors duration-200"
              >
                {contactInfo.phoneFormatted}
              </a>
            </InfoBlock>

            <InfoBlock
              label="Epost"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              }
            >
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-white text-lg font-light hover:text-accent transition-colors duration-200 break-all"
              >
                {contactInfo.email}
              </a>
            </InfoBlock>
          </div>

          {/* Opening hours */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-8">Åpningstider</p>

            <div className="space-y-0">
              {contactInfo.openingHours.map(({ days, hours }) => (
                <div
                  key={days}
                  className="flex justify-between items-center py-5 border-b border-[#222] last:border-b-0"
                >
                  <p className="text-white font-playfair text-lg">{days}</p>
                  <p
                    className={`text-sm font-medium tracking-wide ${
                      hours === 'Stengt' ? 'text-text-muted' : 'text-accent'
                    }`}
                  >
                    {hours}
                  </p>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-10 aspect-[4/3] bg-bg-card border border-[#222] flex flex-col items-center justify-center gap-4 text-text-muted">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <div className="text-center">
                <p className="text-white text-sm font-light">Haakon VII Gate 5B</p>
                <p className="text-xs text-text-muted mt-1">0161 Oslo, Norge</p>
              </div>
              <a
                href={`https://maps.google.com/?q=Haakon+VII+Gate+5B,0161+Oslo`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-accent border border-accent/40 px-4 py-2 hover:bg-accent hover:text-white transition-all duration-200"
              >
                Åpne i Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[#222] text-center">
          <p className="text-text-muted mb-6">Klar for å bestille?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-block px-10 py-4 bg-accent text-white text-sm tracking-widest uppercase hover:bg-[#d63350] transition-all duration-300"
            >
              Ring oss
            </a>
            <Link
              href="/meny"
              className="inline-block px-10 py-4 border border-[#333] text-white/70 text-sm tracking-widest uppercase hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Se meny
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
