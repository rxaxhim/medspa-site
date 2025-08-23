import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const providers = [
  {
    name: "Humaira Khan, RN",
    role: "Aesthetic Nurse",
    bio: "Specialized in laser and advanced skin treatments with a patient-first approach.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Aria Patel, NP",
    role: "Nurse Practitioner",
    bio: "Expert in injectables and skin rejuvenation protocols for natural results.",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
  },
]

export default function Providers() {
  return (
    <section id="providers" className="bg-slate-50 border-y">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Providers</h2>
          <p className="text-slate-600 mt-2">Experienced, licensed, and focused on your comfort and safety.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {providers.map((p) => (
            <Card key={p.name}>
              <CardContent className="p-6 flex items-center gap-4">
                <Avatar className="h-16 w-16 ring-2 ring-primary/15">
                  <AvatarImage src={p.avatar} alt={`${p.name} portrait`} loading="lazy" />
                  <AvatarFallback>
                    {p.name.split(" ").map(n => n[0]).join("").slice(0,2)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-slate-600">{p.role}</div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">View Bio</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{p.name}</DialogTitle>
                    </DialogHeader>
                    <p className="text-slate-700">{p.bio}</p>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
