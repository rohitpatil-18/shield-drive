import { Star, Quote } from "lucide-react";
export default function Testimonials() {

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Toyota Camry Owner",
    review:
      "I compared multiple insurance providers in minutes and saved over $427 a year. The process was simple, fast, and completely stress-free.",
    savings: "$427/yr",
  },
  {
    name: "Michael Brown",
    role: "Tesla Model Y Owner",
    review:
      "The process was incredibly simple. I found better coverage for less money.",
    savings: "$315/yr",
  },
  {
    name: "Emily Davis",
    role: "Honda Civic Owner",
    review:
      "Highly recommend ShieldDrive. Fast, transparent and very easy to use.",
    savings: "$286/yr",
  },
];

 return (
  <section
    id="reviews"
    className="bg-white py-24"
  >
    <div className="mx-auto max-w-7xl px-6">

      <div className="mx-auto mb-16 max-w-3xl text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Loved by Drivers Across the U.S.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Real customers. Real savings. Discover why thousands trust
          ShieldDrive to compare insurance quotes.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Featured Review */}

        <div className="rounded-[32px] bg-slate-900 p-10 text-white lg:col-span-2">

          <Quote
            size={42}
            className="text-amber-400"
          />

          <div className="mt-8 flex gap-1 text-amber-400">

            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                fill="currentColor"
                size={20}
              />
            ))}

          </div>

          <p className="mt-8 text-2xl font-medium leading-relaxed text-slate-100">
            "{testimonials[0].review}"
          </p>

          <div className="mt-6 inline-flex rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">
            Average Savings {testimonials[0].savings}
          </div>

          <div className="mt-10 flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white">
              {testimonials[0].name.charAt(0)}
            </div>

            <div>

              <h3 className="font-semibold">
                {testimonials[0].name}
              </h3>

              <div className="mt-1 flex items-center gap-2">

              <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-300">
                ✓ Verified Driver
              </span>

            </div>

            <p className="mt-2 text-sm text-slate-400">
              {testimonials[0].role}
            </p>

            </div>

          </div>

        </div>

        {/* Right Reviews */}

        <div className="space-y-8">

          {testimonials.slice(1).map((item) => (

            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="mb-4 flex gap-1 text-amber-400">

                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    fill="currentColor"
                    size={16}
                  />
                ))}

              </div>

              <p className="leading-7 text-slate-600 italic">
                "{item.review}"
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5">

                <h4 className="font-semibold text-slate-900">
                  {item.name}
                </h4>

                <div className="mt-2 flex items-center justify-between">

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>

                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                  Saved {item.savings}
                </span>

              </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  </section>
); 

}