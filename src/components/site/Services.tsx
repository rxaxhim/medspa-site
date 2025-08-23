import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Laser Hair Removal",
    desc: "Fast, effective, and comfortable treatments with modern devices.",
    items: ["Underarms", "Full legs", "Brazilian", "Face & Neck"],
  },
  {
    title: "Skin Rejuvenation",
    desc: "Restore glow and texture with tailored treatment plans.",
    items: ["Microneedling", "Chemical Peels", "Facials", "LED Therapy"],
  },
  {
    title: "Injectables",
    desc: "Subtle, natural-looking results from experienced clinicians.",
    items: ["Neuromodulators", "Dermal Fillers", "Skin Boosters"],
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Popular Services</h2>
        <p className="text-slate-600 mt-2">A curated selection of our most-requested treatments.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="h-full card-elevate">
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-slate-600">{s.desc}</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
