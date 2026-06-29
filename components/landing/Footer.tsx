import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-slate-800 bg-slate-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  <span className="text-amber-400">Shield</span>
                  <span>Drive</span>
                </h2>

                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Auto Insurance
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Helping U.S. drivers compare personalized insurance quotes from
              trusted providers in under 2 minutes.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-800 bg-emerald-900/20 px-4 py-2 text-sm text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              SSL Secured Platform
            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                ["Features", "#features"],
                ["Why Choose Us", "#trust"],
                ["Reviews", "#reviews"],
                ["Get Quote", "#quote-form"],
              ].map(([label, href]) => (

                <li key={label}>

                  <a
                    href={href}
                    className="group flex items-center justify-between text-slate-400 transition hover:text-amber-400"
                  >
                    {label}

                    <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Resources
            </h3>

            <ul className="space-y-4">

              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Cookie Policy",
                "Disclaimer",
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="text-slate-400 transition hover:text-amber-400"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">

                <Mail className="mt-1 h-5 w-5 text-amber-400" />

                <div>

                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="text-slate-300 break-all">
                    support@shielddrive.com
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">

                <Phone className="mt-1 h-5 w-5 text-amber-400" />

                <div>

                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p className="text-slate-300">
                    +1 (800) 123-4567
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">

                <MapPin className="mt-1 h-5 w-5 text-amber-400" />

                <div>

                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="text-slate-300">
                    United States
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-slate-500">
              © 2026 <span className="font-semibold text-white">ShieldDrive</span>. All rights reserved.
            </p>

            <p className="text-sm text-slate-500">
              Built for educational purposes • Responsive • Fast • Secure
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}