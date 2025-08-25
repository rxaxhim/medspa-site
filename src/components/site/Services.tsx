import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { asset } from "@/lib/asset"

const services = [
  {
    title: "Laser Hair Removal",
    desc: "Fast, effective, and comfortable treatments with modern devices.",
    items: ["Underarms", "Full legs", "Brazilian", "Face & Neck"],
    img: "/images/hero4.png",
  },
  {
    title: "Skin Rejuvenation",
    desc: "Restore glow and texture with tailored treatment plans.",
    items: ["Microneedling", "Chemical Peels", "Facials", "LED Therapy"],
    img: "/images/hero2.png",
  },
  {
    title: "Injectables",
    desc: "Subtle, natural-looking results from experienced clinicians.",
    items: ["Neuromodulators", "Dermal Fillers", "Skin Boosters"],
    img: "/images/hero3.png",
  },
]

export default function Services() {
  const resolve = (s: string) => (s.startsWith("http") ? s : asset(s))

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Popular Services</h2>
        <p className="text-slate-600 mt-2">A curated selection of our most-requested treatments.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="group h-full overflow-hidden card-elevate">
            {/* Full-bleed top image (no gap) */}
            <div className="relative aspect-[4/3]">
              <img
                src={resolve(s.img)}
                alt={s.title}
                className="absolute inset-0 block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const t = e.currentTarget
                  t.onerror = null
                  t.src = "https://picsum.photos/800/600?blur=2"
                }}
                loading="lazy"
                decoding="async"
              />
            </div>

            <CardHeader className="px-6 pt-4 pb-2">
              <CardTitle className="text-xl sm:text-2xl font-extrabold tracking-tight">
                {s.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="px-6 pt-0 pb-6 space-y-3">
              <p className="text-sm md:text-base text-slate-600">{s.desc}</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
