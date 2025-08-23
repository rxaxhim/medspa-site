import Compare from "@/components/ui/compare";

export default function BeforeAfter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Before &amp; After</h2>
        <p className="text-slate-600 mt-2">Real patient outcomes with personalized treatment plans.</p>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="aspect-[16/10]">
          <Compare
            beforeSrc="/images/before.png"
            afterSrc="/images/after.png"
            initial={50}
            mode="auto"            // hover on desktop, drag on mobile
            showHandle={true}
            className="h-full w-full rounded-xl border overflow-hidden bg-slate-100"
          />
        </div>
      </div>
    </section>
  );
}
