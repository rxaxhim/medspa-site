import { HeartPulse, Star, ShieldCheck } from "lucide-react"

const items = [
  { icon: HeartPulse, label: "Patients Served", value: "12,000+" },
  { icon: Star, label: "Avg Rating", value: "4.9/5" },
  { icon: ShieldCheck, label: "Licensed Providers", value: "100%" },
]

export default function Stats() {
  return (
    <section className="border-y bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* force 3-up even on phones */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="space-y-1">
              <div className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div className="text-lg md:text-2xl font-semibold leading-tight">{value}</div>
              <div className="text-[12px] md:text-sm text-slate-600 leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
