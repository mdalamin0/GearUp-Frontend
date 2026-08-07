import { Backpack, Users, ShoppingBag, Star } from "lucide-react";
import { getHomeStats } from "../../_actions/home/getHomeStats";

// const stats = [
//   {
//     icon: Backpack,
//     value: "500+",
//     label: "Premium Gear",
//   },
//   {
//     icon: Users,
//     value: "120+",
//     label: "Verified Providers",
//   },
//   {
//     icon: ShoppingBag,
//     value: "3,000+",
//     label: "Successful Rentals",
//   },
//   {
//     icon: Star,
//     value: "4.9★",
//     label: "Average Rating",
//   },
// ];

const StatsSection = async() => {
 const statsData = await getHomeStats();

  const stats = [
    {
      icon: Backpack,
      value: `${statsData.totalGear}+`,
      label: "Premium Gear",
    },
    {
      icon: Users,
      value: `${statsData.totalProviders}+`,
      label: "Verified Providers",
    },
    {
      icon: ShoppingBag,
      value: `${statsData.totalRentals}+`,
      label: "Successful Rentals",
    },
    {
      icon: Star,
      value: `${statsData.averageRating}★`,
      label: "Average Rating",
    },
  ];
  return (
    <section className="section-sm">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Trusted Platform
          </span>

          <h2 className="heading mt-4">Trusted by Outdoor Enthusiasts</h2>

          <p className="sub-heading mt-4 mx-auto max-w-2xl">
            Thousands of adventurers trust GearUp to rent premium outdoor and
            sports equipment safely and affordably.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-7" />
                </div>

                <h3 className="text-4xl font-bold text-primary">
                  {item.value}
                </h3>

                <p className="mt-2 text-muted-foreground">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
