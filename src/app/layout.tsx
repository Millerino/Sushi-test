import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sushi of Life – Oslo',
  description:
    'Autentisk japansk sushi i hjertet av Oslo. Besøk oss på Haakon VII Gate 5B.',
  keywords: 'sushi, oslo, japansk mat, restaurant, haakon VII gate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body className="bg-bg-primary text-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
