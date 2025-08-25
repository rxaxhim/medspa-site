"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { asset } from "@/lib/asset";

/** Supply 6+ images; we'll loop them to fill rows if needed */
const PRODUCTS = [
  { title: "Laser Hair Removal", link: "#services", thumbnail: "/images/hero1.png" },
  { title: "Skin Rejuvenation",  link: "#services", thumbnail: "/images/hero2.png" },
  { title: "Injectables",        link: "#services", thumbnail: "/images/hero3.png" },
  { title: "Microneedling",      link: "#services", thumbnail: "/images/hero4.png" },
  { title: "Chemical Peels",     link: "#services", thumbnail: "/images/hero5.png" },
  { title: "LED Therapy",        link: "#services", thumbnail: "/images/hero6.png" },
];

export default function ParallaxHero() {
  return <HeroParallaxOverlay products={PRODUCTS} />;
}

/* -------------------- CORE -------------------- */

type Product = { title: string; link: string; thumbnail: string };

function HeroParallaxOverlay({ products }: { products: Product[] }) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // springs for smoothness
  const springCfg = { stiffness: 300, damping: 30, bounce: 100 };
  const x      = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springCfg);
  const xRev   = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springCfg);
  const rotX   = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springCfg);
  const rotZ   = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springCfg);
  const fade   = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springCfg);
  const transY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-280, 500]), springCfg);

  // Build 3 rows, always filled (loops images as needed)
  const rows = buildRows(products.length ? products : PRODUCTS, 3, 5);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden border-b bg-gradient-to-br from-primary/10 via-white to-slate-50"
    >
      {/* Overlayed HERO COPY (clickable) */}
      <div className="pointer-events-auto absolute inset-0 z-20">
        {/* center the content */}
        <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-4">
          <div className="relative w-full text-center">
            {/* soft glow behind text (no clicks) */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              {/* smaller glow on mobile */}
              <div className="h-40 sm:h-56 md:h-64 w-[85%] sm:w-[90%] max-w-4xl rounded-full bg-primary/20 blur-3xl" />
            </div>

            {/* glassy panel to improve contrast */}
            <div
              className="
                mx-auto w-full
                max-w-sm sm:max-w-md md:max-w-3xl   /* narrower on mobile */
                rounded-xl md:rounded-2xl           /* slightly smaller radius on mobile */
                bg-white/60 shadow-lg ring-1 ring-black/5 backdrop-blur-sm
                p-4 sm:p-6 md:p-8                   /* tighter padding on mobile */
              "
            >
              <div className="space-y-5 sm:space-y-6 md:space-y-8">
                <Badge className="rounded-full bg-primary/20 text-primary px-3 py-1.5 text-xs sm:text-sm md:text-base">
                  Modern Care, Compassionate Team
                </Badge>

                {/* smaller heading on mobile */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight md:leading-[1.05] tracking-tight">
                  Expert Medical Aesthetics &amp; Skin Health
                </h1>

                {/* smaller body on mobile */}
                <p className="text-base sm:text-lg md:text-xl text-slate-600">
                  Personalized treatments, evidence-based results, and easy online booking.
                  Trusted by patients across the GTA.
                </p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  {/* keep size=lg but trim height/padding on mobile */}
                  <Button asChild size="lg" className="w-full sm:w-auto h-10 sm:h-11 px-5 sm:px-6">
                    <a href="#book">Book Appointment</a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    size="lg"
                    className="w-full sm:w-auto h-10 sm:h-11 px-5 sm:px-6"
                  >
                    <a href="#services">View Services</a>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 text-xs sm:text-sm md:text-base text-slate-500">
                  <div>• Nurse-led clinic</div>
                  <div>• Free consultations</div>
                  <div>• Direct messaging</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PARALLAX SCENE – responsive height and positioning */}
      <div
        className="pointer-events-none relative z-10
        h-[115vh] xl:h-[160vh] 2xl:h-[115vh]
        pt-10 pb-0
        [perspective:1000px] [transform-style:preserve-3d]"
      >
        <motion.div style={{ rotateX: rotX, rotateZ: rotZ, translateY: transY, opacity: fade }}>
          {/* Row 1 (right-to-left like original) */}
          <motion.div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 flex flex-row-reverse space-x-reverse space-x-4 sm:space-x-6 md:space-x-12 lg:space-x-20">
            {rows[0].map((p) => (
              <ProductCard key={`r1-${p.title}-${p.thumbnail}`} product={p} translate={x} />
            ))}
          </motion.div>

          {/* Row 2 (left-to-right) */}
          <motion.div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 flex flex-row space-x-4 sm:space-x-6 md:space-x-12 lg:space-x-20">
            {rows[1].map((p) => (
              <ProductCard key={`r2-${p.title}-${p.thumbnail}`} product={p} translate={xRev} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- Pieces -------------------- */

function ProductCard({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) {
  // ✅ Resolve GitHub Pages base path for thumbnails
  const resolve = (s: string) => (s.startsWith("http") ? s : asset(s));
  const [src, setSrc] = React.useState(resolve(product.thumbnail));

  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product relative h-48 w-64 sm:h-56 sm:w-72 md:h-64 md:w-80 lg:h-80 lg:w-96 2xl:h-96 2xl:w-[30rem] shrink-0"
    >
      <a href={product.link} className="block">
        <img
          src={src}
          onError={() => setSrc("https://picsum.photos/1200/800?blur=2")}
          className="absolute inset-0 h-full w-full object-cover"
          alt={product.title}
          loading="lazy"
        />
      </a>
      <div className="pointer-events-none absolute inset-0 bg-black opacity-0 transition-opacity group-hover/product:opacity-60" />
      <h2 className="pointer-events-none absolute bottom-4 left-4 translate-y-2 text-white opacity-0 transition-all group-hover/product:translate-y-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
}

/** Create N rows with M tiles each, looping the input array so rows are always filled */
function buildRows(items: Product[], rows: number, perRow: number): Product[][] {
  const out: Product[][] = [];
  const len = items.length || 1;
  for (let r = 0; r < rows; r++) {
    const row: Product[] = [];
    for (let i = 0; i < perRow; i++) {
      const idx = (r * 2 + i) % len; // staggered start per row
      row.push(items[idx]);
    }
    out.push(row);
  }
  return out;
}
