import Link from "next/link";
import { Boxes, ShoppingBag, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

const quickActions = [
  {
    title: "Manage Users",
    description: "View all users, activate or suspend accounts.",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "Manage Gear",
    description: "Inspect all gear listings across the platform.",
    href: "/dashboard/admin/gear",
    icon: Boxes,
  },
  {
    title: "Manage Orders",
    description: "Monitor all rental orders and their status.",
    href: "/dashboard/admin/orders",
    icon: ShoppingBag,
  },
];

const QuickActions = () => {
  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold">Quick Actions</h2>

        <p className="text-sm text-muted-foreground">
          Jump directly to the most important administrative tasks.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <div
              key={action.title}
              className="rounded-2xl border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="size-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold">{action.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {action.description}
              </p>

              <Button asChild className="mt-6 w-full">
                <Link href={action.href}>Open</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;
