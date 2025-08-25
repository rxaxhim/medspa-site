export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-white">
      {/* Top content */}
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row md:justify-between gap-8 text-sm text-center md:text-left">
        {/* Clinic Info */}
        <div className="space-y-2">
          <div className="font-extrabold text-lg">Northshore Clinic</div>
          <p className="text-slate-600">123 Lakeshore Rd E, Mississauga, ON</p>
          <p className="text-slate-600">Mon–Sat • 9am–7pm</p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <div className="font-semibold">Contact</div>
          <p className="text-slate-600">Tel: (905) 555-1299</p>
          <p className="text-slate-600">Email: hello@northshoreclinic.ca</p>
        </div>

        {/* Links */}
        <div className="space-y-2 w-full md:w-auto">
          <div className="font-semibold">Links</div>
          {/* Centered 2x2 on mobile, left-aligned single column from md+ */}
          <ul className="mx-auto max-w-[14rem] grid grid-cols-2 gap-x-0 gap-y-0 justify-items-center
                         md:mx-0 md:max-w-none md:grid-cols-1 md:gap-y-1 md:gap-x-0 md:justify-items-start">
            <li><a href="#services"  className="block text-slate-600 hover:underline">Services</a></li>
            <li><a href="#providers" className="block text-slate-600 hover:underline">Providers</a></li>
            <li><a href="#faq"       className="block text-slate-600 hover:underline">FAQ</a></li>
            <li><a href="#book"      className="block text-slate-600 hover:underline">Book</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar (aligned with content width) */}
      <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-slate-500">
        <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row">
          <span>© {new Date().getFullYear()} Northshore Clinic</span>
          <a
            href="https://yoururls.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700"
          >
            Website by <span className="font-medium">YourUrls</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
