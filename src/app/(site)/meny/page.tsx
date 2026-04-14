import { client, isSanityConfigured } from '@/sanity/client'
import { menuItemsQuery } from '@/sanity/queries'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meny – Sushi of Life',
  description: 'Se vår fulle meny med fersk sushi, rolls og pakker.',
}

type MenuItem = {
  _id: string
  name: string
  price: number
  description?: string
  category: 'sushi-meny' | 'sushi-pakke'
}

// Static fallback data
const STATIC_SUSHI_MENY: MenuItem[] = [
  { _id: 's1', name: 'Laks Nigiri', price: 65, description: 'Fersk atlantisk laks på håndlaget sushiris (2 stk)', category: 'sushi-meny' },
  { _id: 's2', name: 'Tunfisk Nigiri', price: 75, description: 'Premium tunfisk på sushiris (2 stk)', category: 'sushi-meny' },
  { _id: 's3', name: 'Kveite Nigiri', price: 70, description: 'Norsk kveite på sushiris (2 stk)', category: 'sushi-meny' },
  { _id: 's4', name: 'Reke Nigiri', price: 65, description: 'Ferske norske reker på sushiris (2 stk)', category: 'sushi-meny' },
  { _id: 's5', name: 'California Roll', price: 95, description: 'Krabbe, avokado og agurk (8 biter)', category: 'sushi-meny' },
  { _id: 's6', name: 'Spicy Salmon Roll', price: 115, description: 'Laks, spicy mayo, agurk og tobiko (8 biter)', category: 'sushi-meny' },
  { _id: 's7', name: 'Dragon Roll', price: 135, description: 'Reke tempura, avokado og unagi saus (8 biter)', category: 'sushi-meny' },
  { _id: 's8', name: 'Rainbow Roll', price: 145, description: 'Assortert fisk og avokado (10 biter)', category: 'sushi-meny' },
  { _id: 's9', name: 'Avocado Maki', price: 75, description: 'Frisk avokado med sesam (6 biter)', category: 'sushi-meny' },
  { _id: 's10', name: 'Laks Temaki', price: 85, description: 'Håndrulle med fersk laks og avokado', category: 'sushi-meny' },
  { _id: 's11', name: 'Chirashi Don', price: 185, description: 'Assortert sashimi over sushiris i en skål', category: 'sushi-meny' },
  { _id: 's12', name: 'Sashimi Tallerken', price: 195, description: 'Utvalg av sesongenes beste fisk (9 biter)', category: 'sushi-meny' },
]

const STATIC_SUSHI_PAKKE: MenuItem[] = [
  { _id: 'p1', name: 'Pakke A', price: 185, description: '12 biter – California Roll, Laks Maki og Avokado Maki', category: 'sushi-pakke' },
  { _id: 'p2', name: 'Pakke B', price: 295, description: '20 biter – Utvalgt blanding av vår daglige meny', category: 'sushi-pakke' },
  { _id: 'p3', name: 'Pakke C', price: 445, description: '32 biter – Premium blanding inkludert Dragon og Rainbow Roll', category: 'sushi-pakke' },
  { _id: 'p4', name: 'Family Pakke', price: 695, description: '50 biter – Perfekt for familien eller grupper', category: 'sushi-pakke' },
]

async function getMenuItems(): Promise<MenuItem[]> {
  if (!isSanityConfigured) return [...STATIC_SUSHI_MENY, ...STATIC_SUSHI_PAKKE]
  try {
    const items = await client.fetch<MenuItem[]>(menuItemsQuery)
    return items?.length > 0 ? items : [...STATIC_SUSHI_MENY, ...STATIC_SUSHI_PAKKE]
  } catch {
    return [...STATIC_SUSHI_MENY, ...STATIC_SUSHI_PAKKE]
  }
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group relative bg-bg-card border border-border-subtle hover:border-accent/40 transition-all duration-300 p-6">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-playfair text-lg text-white group-hover:text-accent transition-colors duration-200 leading-snug">
            {item.name}
          </h3>
          {item.description && (
            <p className="text-text-muted text-sm leading-relaxed mt-2">
              {item.description}
            </p>
          )}
        </div>
        <div className="shrink-0 text-right">
          <span className="font-playfair text-xl text-accent font-medium">
            {item.price},-
          </span>
          <span className="block text-xs text-text-muted">kr</span>
        </div>
      </div>
      {/* Accent line on hover */}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
    </article>
  )
}

export default async function MenuPage() {
  const items = await getMenuItems()
  const sushiMeny = items.filter((i) => i.category === 'sushi-meny')
  const sushiPakke = items.filter((i) => i.category === 'sushi-pakke')

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#222]">
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">Vår Meny</p>
        <h1 className="font-playfair text-5xl md:text-6xl text-white mb-6">Smak av Japan</h1>
        <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
          Alle retter tilberedes med de ferskeste råvarene. Opplev den autentiske japanske smaken midt i Oslo.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* Sushi of Life Meny */}
        <section>
          <div className="flex items-center gap-6 mb-10">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-1">À la carte</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-white">Sushi of Life Meny</h2>
            </div>
            <div className="flex-1 h-px bg-[#222]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {sushiMeny.map((item) => (
              <MenuCard key={item._id} item={item} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="flex-1 h-px bg-[#222]" />
          <span className="text-accent text-sm tracking-widest">✦ ✦ ✦</span>
          <div className="flex-1 h-px bg-[#222]" />
        </div>

        {/* Sushi Pakke */}
        <section>
          <div className="flex items-center gap-6 mb-10">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-accent mb-1">For hele bordet</p>
              <h2 className="font-playfair text-3xl md:text-4xl text-white">Sushi Pakke</h2>
            </div>
            <div className="flex-1 h-px bg-[#222]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sushiPakke.map((item) => (
              <MenuCard key={item._id} item={item} />
            ))}
          </div>
        </section>

        {/* Allergen note */}
        <p className="text-center text-xs text-text-muted/60 border-t border-[#222] pt-8">
          Spør vår personale om allergener og spesielle ønsker. Vi tilpasser gjerne.
        </p>
      </div>
    </>
  )
}
