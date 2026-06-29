import {
  ShieldCheck,
  Users,
  Lock,
  BadgeDollarSign,
  Clock3,
  Building2,
} from "lucide-react";

export default function Trust() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Licensed Nationwide",
      description: "Helping drivers compare insurance quotes across the U.S.",
    },
    {
      icon: Users,
      title: "100,000+ Happy Customers",
      description: "Trusted by thousands of drivers every year.",
    },
    {
      icon: Lock,
      title: "Bank-Level Security",
      description: "Your personal information is always encrypted.",
    },
    {
      icon: BadgeDollarSign,
      title: "No Hidden Fees",
      description: "Compare quotes completely free of charge.",
    },
    {
      icon: Clock3,
      title: "2 Minute Quote",
      description: "Receive personalized quotes in just a few minutes.",
    },
    {
      icon: Building2,
      title: "Trusted Providers",
      description: "Compare quotes from leading insurance companies.",
    },
  ];

  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Why Drivers Trust ShieldDrive
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Join thousands of U.S. drivers comparing personalized insurance
            quotes from trusted providers — securely, quickly and without
            hidden fees.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_20px_50px_rgba(251,191,36,0.12)]"
            >
              {/* Hover Accent */}

              <div className="absolute left-0 top-0 h-full w-1 scale-y-0 bg-amber-400 transition-transform duration-300 group-hover:scale-y-100"></div>

              {/* Icon */}

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 transition duration-300 group-hover:scale-110 group-hover:bg-amber-500/20">

                <item.icon
                  size={30}
                  className="text-amber-400"
                />

              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}