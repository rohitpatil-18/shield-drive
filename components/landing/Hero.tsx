import { ShieldCheck, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section 
    id="hero"
    className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      
      <div className="absolute inset-0 overflow-hidden">
  <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"></div>

  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
</div>

      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-14 md:py-20 text-center">

        <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
          <ShieldCheck
            size={18}
            className="text-amber-400"/>

          <span className="text-white">
            Trusted by 100,000+ Drivers Nationwide
          </span>
        </span>

        <h1 className="mt-8 max-w-4xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl">
          Protect Your Journey.
          <br />
          Save More on Car Insurance.
        </h1>

        <p className="mt-8 max-w-2xl text-base md:text-lg leading-8 text-slate-300">
          Compare personalized quotes from trusted insurance providers in under
          <span className="font-semibold text-white"> 2 minutes</span>.
          No hidden fees. No spam. Just better coverage at a better price.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-medium">

          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-white sm:text-sm backdrop-blur-sm">
            <CheckCircle size={18} className="text-emerald-400" />
            Fast Quote Comparison
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-white sm:text-sm backdrop-blur-sm">
            <CheckCircle size={18} className="text-emerald-400" />
            Secure &amp; Private
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-white sm:text-sm backdrop-blur-sm">
            <CheckCircle size={18} className="text-emerald-400" />
            No Hidden Charges
          </div>

        </div>

        <a
          href="#quote-form"
          className="mt-8 md:mt-12 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50"
        >
          Get Free Quote
        </a>

      </div>
    </section>
    
  );
}
