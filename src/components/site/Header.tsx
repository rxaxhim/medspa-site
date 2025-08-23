import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl">Northshore Clinic</a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#services" className="px-3 py-2">Services</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#providers" className="px-3 py-2">Providers</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#testimonials" className="px-3 py-2">Testimonials</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#faq" className="px-3 py-2">FAQ</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#contact" className="px-3 py-2">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#book">Book Appointment</a>
          </Button>
        </div>

        {/* Mobile */}
            <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                </Button>
                </SheetTrigger>

                {/* 👇 Full-width on phones, narrow on sm+; add padding and proper header */}
                <SheetContent side="right" className="w-full sm:max-w-xs px-5 py-4">
                {/* Use SheetHeader/Title so the X is positioned correctly */}
                <div className="font-extrabold text-lg pr-10">Northshore Clinic</div>
                <Separator className="mt-3" />

                <nav className="mt-4 grid">
                    <a onClick={() => setOpen(false)} className="py-3 text-lg" href="#services">Services</a>
                    <a onClick={() => setOpen(false)} className="py-3 text-lg" href="#providers">Providers</a>
                    <a onClick={() => setOpen(false)} className="py-3 text-lg" href="#testimonials">Testimonials</a>
                    <a onClick={() => setOpen(false)} className="py-3 text-lg" href="#faq">FAQ</a>
                    <a onClick={() => setOpen(false)} className="py-3 text-lg" href="#contact">Contact</a>

                    <Button className="mt-4" asChild>
                    <a href="#book">Book Appointment</a>
                    </Button>
                </nav>
                </SheetContent>
            </Sheet>
            </div>
        </div>
    </header>
  )
}
