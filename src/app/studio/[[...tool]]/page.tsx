export const dynamic = 'force-dynamic'

import NextDynamic from 'next/dynamic'

// Both sanity.config and NextStudio must be imported dynamically (client-side only)
// to avoid 'createContext is not a function' errors during server-side evaluation.
const Studio = NextDynamic(
  async () => {
    const [{ NextStudio }, { default: config }] = await Promise.all([
      import('next-sanity/studio'),
      import('../../../../sanity.config'),
    ])
    function StudioWrapper() {
      return <NextStudio config={config} />
    }
    return StudioWrapper
  },
  { ssr: false }
)

export default function StudioPage() {
  return <Studio />
}
