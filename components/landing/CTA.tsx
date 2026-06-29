import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  DollarSign,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
<div className="grid items-center gap-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-2xl sm:p-8 lg:grid-cols-[1.25fr_0.85fr] lg:p-12">
        


          {/* Left Side */}

      <div className="flex flex-col justify-center">

  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
    <ShieldCheck size={16} />
    Trusted by 100,000+ Drivers
  </div>

  <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
    Ready to Save on
    <span className="block text-amber-500">
      Car Insurance?
    </span>
  </h2>

  <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
    Compare personalized quotes from trusted insurance providers and receive your
    best rate in less than <strong>2 minutes.</strong>
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

  <div className="group flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-200">
    <Clock3
      size={16}
      className="text-amber-500 transition-transform duration-300 group-hover:rotate-12"/>
    Under 2 Minutes
  </div>

  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-200">
    <ShieldCheck
      size={16}
      className="text-emerald-500"
    />
    Secure
  </div>

  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-200">
    <DollarSign
      size={16}
      className="text-amber-500"
    />
    100% Free
  </div>

</div>

  <a
    href="#quote-form"
    className="mt-10 inline-flex w-full justify-center sm:w-fit items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-300"
  >
    Get My Free Quote

    <ArrowRight size={20} />
  </a>

</div>

          {/* Right Side */}


      <div className="flex justify-center">

  <div className="w-full rounded-3xl bg-slate-900 p-6 text-white shadow-2xl sm:max-w-sm sm:p-8">

    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
      Average Savings
    </p>

    <h3 className="mt-2 text-6xl sm:text-7xl font-black text-amber-400">
      $427
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
      Drivers comparing quotes through ShieldDrive save an average of
      <strong className="text-white"> $427 every year.</strong>
    </p>

    <div className="mt-8 space-y-3">

      <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-800 px-4 py-3">
        <span className="text-slate-300">Drivers Served</span>
        <span className="shrink-0 text-right font-bold">100,000+</span>
      </div>

      <div className="flex flex-col gap-1 rounded-xl bg-slate-800 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-slate-300">
          Average Time
        </span>

        <span className="font-bold text-white">
          Under 2 mins
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-800 px-4 py-3">
        <span className="text-slate-300">
          Security
        </span>

        <span className="flex shrink-0 items-center gap-1 font-bold text-emerald-400 text-sm sm:text-base">
          <ShieldCheck className="h-4 w-4" />
          <span className="hidden sm:inline">
            SSL Protected
          </span>
          <span className="sm:hidden">
            SSL
          </span>
        </span>
      </div>

    </div>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}