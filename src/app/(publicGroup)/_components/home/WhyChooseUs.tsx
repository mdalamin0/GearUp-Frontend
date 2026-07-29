import { ShieldCheck, Truck, Tent, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Pickup",
    description:
      "Reserve your gear online and pick it up quickly from trusted providers near you.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Enjoy safe and reliable payments powered by SSLCommerz with a seamless checkout experience.",
  },
  {
    icon: Tent,
    title: "Premium Equipment",
    description:
      "Choose from a wide collection of high-quality camping, hiking, cycling, and water sports gear.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Providers",
    description:
      "Every provider is verified to ensure reliable service and well-maintained equipment.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-muted/30">
      <div className="container">
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Why Choose GearUp
          </span>

          <h2 className="heading mt-4">
            Everything You Need for Your Next Adventure
          </h2>

          <p className="sub-heading mt-4">
            GearUp makes renting outdoor and sports equipment simple,
            affordable, and secure. Spend less time searching and more time
            exploring.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-7" />
                </div>

                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
