import {
  Search,
  Zap,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";

export default function FeatureSection() {

  const features = [
    {
      icon: Search,
      title: "Compare Top Providers",
      description:
        "Compare quotes from leading insurance companies in one place.",
    },
    {
      icon: Zap,
      title: "Fast & Simple",
      description:
        "Complete your quote request in just a few minutes.",
    },
    {
      icon: BadgeDollarSign,
      title: "Save More",
      description:
        "Find better coverage while lowering your insurance premium.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="font-semibold uppercase tracking-widest text-amber-600">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Insurance made
            <br />
            simple.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Compare multiple insurance companies in minutes and
            find better protection at the right price.
          </p>

          <div className="mt-12 space-y-8">

            {features.map((feature) => (

              <div
                key={feature.title}
                className="group flex gap-5"
              >

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 transition duration-300 group-hover:bg-amber-500">

                  <feature.icon
                    size={26}
                    className="text-amber-600 transition duration-300 group-hover:text-white"
                  />

                </div>

                <div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {feature.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center">

          <div className="w-full rounded-[32px] bg-slate-900 p-10 text-white shadow-2xl">

            <h3 className="text-3xl font-bold">
              Save up to
              <span className="text-amber-400">
                {" "}40%
              </span>
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              Thousands of U.S. drivers compare insurance quotes every day
              using ShieldDrive.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

                <span>Average Time</span>

                <span className="font-semibold">
                  Under 2 mins
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

                <span>Drivers Helped</span>

                <span className="font-semibold">
                  100,000+
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

                <span>Secure Form</span>

                <span className="font-semibold">
                  SSL Protected
                </span>

              </div>

            </div>

            <a
              href="#quote-form"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-4 font-semibold transition hover:bg-amber-600"
            >
              Get My Quote

              <ArrowRight size={18} />

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}