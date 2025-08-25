"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { asset } from "@/lib/asset";

type Testimonial = {
  name: string;
  text: string;
  img?: string; // optional local image like "/images/reviews/sarah.webp"
};

const testimonials: Testimonial[] = [
  { name: "Sarah", text: "Amazing experience. Booking was easy and results were even better." },
  { name: "Nadia", text: "Professional team and spotless clinic. Highly recommend skin rejuvenation!" },
  { name: "Leah", text: "They listened to my goals and delivered subtle, natural results." },
  { name: "Priya", text: "Thoughtful consultation and great follow-up. I felt cared for." },
  // add more if you like
];

// split into two rows
const mid = Math.ceil(testimonials.length / 2);
const rowA = testimonials.slice(0, mid);
const rowB = testimonials.slice(mid);

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Patients Say</h2>
        <p className="text-slate-600 mt-2">Trusted by our community for safe, effective care.</p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {/* Row A */}
        <Marquee pauseOnHover className="[--duration:22s] gap-4 md:gap-6">
          {rowA.map((t, i) => (
            <ReviewCard key={`a-${i}-${t.name}`} {...t} />
          ))}
        </Marquee>

        {/* Row B (reverse) */}
        {rowB.length > 0 && (
          <Marquee reverse pauseOnHover className="[--duration:22s] mt-4 gap-4 md:gap-6">
            {rowB.map((t, i) => (
              <ReviewCard key={`b-${i}-${t.name}`} {...t} />
            ))}
          </Marquee>
        )}

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-background" />
      </div>
    </section>
  );
}

function ReviewCard({ name, text, img }: Testimonial) {
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  const src = img ? asset(img) : undefined;

  return (
    <Card className="h-full w-64 shrink-0 overflow-hidden border bg-white/70 backdrop-blur-sm card-elevate">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            {src ? (
              <AvatarImage src={src} alt={`${name} avatar`} />
            ) : (
              <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
            )}
          </Avatar>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">{name}</div>
            <div className="flex items-center gap-0.5 text-amber-500">
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-700">“{text}”</p>
      </CardContent>
    </Card>
  );
}
