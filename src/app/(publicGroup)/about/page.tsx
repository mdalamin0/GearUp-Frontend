import {
  BadgeCheck,
  CalendarCheck,
  ShieldCheck,
  Users,
  Store,
  CreditCard,
  Search,
  PackageCheck,
  ArrowRight,
  Mountain,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure & Trusted",
    description:
      "Secure authentication and role-based access keep every GearUp account and transaction protected.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Gear",
    description:
      "Discover outdoor and sports equipment listed by verified providers for your next adventure.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description:
      "Complete your rental payment securely through our integrated payment system.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Rentals",
    description:
      "Choose your preferred rental period and enjoy equipment without the cost of ownership.",
  },
];

const roles = [
  {
    icon: Users,
    title: "For Customers",
    description:
      "Browse gear, compare options, place rental orders, make secure payments, and share reviews after your rental.",
  },
  {
    icon: Store,
    title: "For Providers",
    description:
      "List your equipment, manage inventory, receive rental requests, and track your rental orders.",
  },
  {
    icon: ShieldCheck,
    title: "For Administrators",
    description:
      "Manage users, categories, gear listings, rental orders, and overall platform activities.",
  },
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find Your Gear",
    description:
      "Browse and filter outdoor and sports equipment based on your needs.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Choose Your Dates",
    description:
      "Select the rental period and quantity that works for your adventure.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pay Securely",
    description:
      "Complete your rental payment through the secure payment flow.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Enjoy Your Adventure",
    description:
      "Pick up your gear, enjoy your experience, and return it when your rental ends.",
  },
];

const AboutPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/10 via-background to-background" />

        <div className="container py-20 md:py-28 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Mountain className="size-8" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About GearUp
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Adventure starts with the{" "}
              <span className="text-primary">right gear.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              GearUp is a modern sports and outdoor gear rental platform
              designed to make quality equipment accessible, affordable, and
              easy to rent.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/gear"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Explore Gear
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/auth/register"
                className="inline-flex h-11 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium transition hover:bg-accent"
              >
                Join GearUp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Making outdoor adventures more accessible.
            </h2>

            <div className="mt-6 space-y-4 leading-7 text-muted-foreground">
              <p>
                Outdoor adventures often require expensive equipment that may
                only be used a few times. GearUp solves that problem by
                connecting customers with providers who offer quality sports and
                outdoor gear for rent.
              </p>

              <p>
                Whether you are planning a weekend camping trip, an outdoor
                expedition, or a sports activity, GearUp helps you find the
                equipment you need without the commitment of buying it.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <Mountain className="size-8 text-primary" />
              <h3 className="mt-5 text-xl font-semibold">Explore More</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Discover equipment for your next outdoor experience.
              </p>
            </div>

            <div className="sm:mt-8 rounded-2xl border bg-card p-6 shadow-sm">
              <Users className="size-8 text-primary" />
              <h3 className="mt-5 text-xl font-semibold">One Community</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Customers and providers connected through one platform.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <PackageCheck className="size-8 text-primary" />
              <h3 className="mt-5 text-xl font-semibold">Simple Rentals</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                From browsing to returning gear, everything stays simple.
              </p>
            </div>

            <div className="sm:mt-8 rounded-2xl border bg-card p-6 shadow-sm">
              <BadgeCheck className="size-8 text-primary" />
              <h3 className="mt-5 text-xl font-semibold">
                Reliable Experience
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                A transparent rental experience built around trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why GearUp */}
      <section className="border-y bg-muted/30">
        <div className="container py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why GearUp
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need for a better rental experience.
            </h2>

            <p className="mt-4 text-muted-foreground">
              We focus on making gear discovery, rental management, and payments
              simple for everyone.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Three Roles */}
      <section className="container py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            One Platform
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for the entire rental ecosystem.
          </h2>

          <p className="mt-4 text-muted-foreground">
            GearUp gives every type of user the tools they need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className="group rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{role.title}</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y bg-muted/30">
        <div className="container py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Rent gear in four simple steps.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  <div className="h-full rounded-2xl border bg-background p-7 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-bold text-primary/20">
                        {step.number}
                      </span>

                      <Icon className="size-6 text-primary" />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-10 md:py-20">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 size-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <Mountain className="mx-auto size-10" />

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for your next adventure?
            </h2>

            <p className="mt-4 text-primary-foreground/80">
              Find the right gear, choose your dates, and start your adventure
              with GearUp.
            </p>

            <Link
              href="/gear"
              className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-background px-6 text-sm font-medium text-foreground transition hover:bg-background/90"
            >
              Browse Available Gear
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
