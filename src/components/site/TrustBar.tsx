import * as React from "react"
import { asset } from "@/lib/asset"

export default function TrustBar() {
  // Update extensions here if your files are PNG/WEBP instead of SVG.
  const LOGOS = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner1.png",
    "/images/partner2.png",
  ]

  return (
    <section className="border-y bg-white" aria-labelledby="trustbar-title">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Nicer header */}
        <div className="mb-8 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
            Trusted by
          </span>
          <h2
            id="trustbar-title"
            className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-slate-900"
          >
            Patients &amp; Partners
          </h2>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-6 place-items-center">
          {LOGOS.map((src, i) => (
            <LogoImg key={i} src={src} alt={`Partner ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoImg({ src, alt }: { src: string; alt: string }) {
  // Prefix GitHub Pages base path so /images/... works under /medspa-site/
  const [currentSrc, setCurrentSrc] = React.useState(asset(src))

  // Try .svg -> .png -> .webp if the previous file isn't found
  const handleError = React.useCallback(() => {
    if (currentSrc.endsWith(".svg")) setCurrentSrc(currentSrc.replace(".svg", ".png"))
    else if (currentSrc.endsWith(".png")) setCurrentSrc(currentSrc.replace(".png", ".webp"))
  }, [currentSrc])

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={handleError}
      className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
    />
  )
}
