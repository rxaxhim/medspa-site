import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CTA() {
  return (
    <section
      id="book"
      className="relative w-full overflow-hidden bg-gradient-to-tr from-primary/10 via-white to-white py-16 lg:py-20"
    >
      {/* decorative glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* CHANGED: edge-to-edge on mobile, square corners */}
        <div className="-mx-4 rounded-none sm:mx-0 sm:rounded-xl border bg-white/80 backdrop-blur-sm p-6 sm:p-8 ring-1 ring-primary/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to get started?</h3>
              <p className="text-slate-600 mt-2">
                Book a consultation and we’ll craft a personalized treatment plan for your goals.
              </p>
              <ul className="mt-4 text-slate-600 text-sm space-y-1">
                <li>• Nurse-led, evidence-based care</li>
                <li>• Flexible scheduling</li>
                <li>• Transparent pricing</li>
              </ul>
            </div>

            <div className="flex md:justify-end gap-3">
              <Button variant="outline" asChild>
                <a href="#contact">Call the clinic</a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Book Online</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Book a Consultation</DialogTitle>
                  </DialogHeader>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Jane Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="jane@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(555) 555-5555" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="notes">Notes (optional)</Label>
                      <Textarea id="notes" placeholder="Tell us your goals..." />
                    </div>
                    <Button type="submit" className="w-full">Submit</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
