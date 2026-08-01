import Link from "next/link";
import { Bike, CreditCard, ShoppingBag } from "lucide-react";

const actions = [
  {
    title: "Browse Gear",
    description: "Explore available rental equipment.",
    href: "/gear",
    icon: Bike,
  },
  {
    title: "My Orders",
    description: "Track all your rental orders.",
    href: "/dashboard/customer/orders",
    icon: ShoppingBag,
  },
  {
    title: "Payment History",
    description: "View all completed payments.",
    href: "/dashboard/customer/payments",
    icon: CreditCard,
  },
];

const QuickActions = () => {
  return (
    <section className="rounded-2xl border bg-background p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Quick Actions</h2>

        <p className="text-sm text-muted-foreground">
          Quickly access your most-used features.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="group rounded-2xl border p-5 transition-all hover:border-primary hover:bg-primary/5"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <action.icon className="size-6 text-primary" />
            </div>

            <h3 className="font-semibold transition group-hover:text-primary">
              {action.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
