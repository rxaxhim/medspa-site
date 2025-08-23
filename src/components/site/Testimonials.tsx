import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  { name: "Sarah", text: "Amazing experience. Booking was easy and results were even better." },
  { name: "Nadia", text: "Professional team and spotless clinic. Highly recommend skin rejuvenation!" },
  { name: "Leah", text: "They listened to my goals and delivered subtle, natural results." },
  { name: "Priya", text: "Thoughtful consultation and great follow-up. I felt cared for." },
]

export default function Testimonials() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  // Enable autoplay only on phones (<= 640px)
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Patients Say</h2>
        <p className="text-slate-600 mt-2">Trusted by our community for safe, effective care.</p>
      </div>

      <Carousel
        className="relative"
        opts={{ align: "start", loop: true }}
        plugins={isMobile ? [autoplay.current] : []}
      >
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full card-elevate">
                <CardContent className="p-6">
                  <p className="text-slate-700">“{t.text}”</p>
                  <div className="mt-4 text-sm font-semibold">{t.name}</div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Hide arrows on phones */}
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  )
}
