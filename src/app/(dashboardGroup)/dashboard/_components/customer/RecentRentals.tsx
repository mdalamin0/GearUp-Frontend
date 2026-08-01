import Link from "next/link";
import { ArrowRight, CalendarX2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRentalOrders } from "../../_actions/customer/getRentalOrder";
import { format } from "date-fns";
import { IRental } from "../../types/type";
import { rentalStatusConfig } from "@/utils/rental-status";
import EmptyState from "../shared/EmptyState";

const RecentRentals = async () => {
  const rentals: IRental[] = await getRentalOrders();
  

  return (
    <section className="rounded-2xl border bg-background p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Recent Rentals</h2>

          <p className="text-sm text-muted-foreground">
            Your latest rental activities.
          </p>
        </div>

        <Button variant="ghost" asChild>
          <Link href="/dashboard/customer/orders">
            View All
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        {rentals.slice(0, 5).map((item) => {
          const { label, className } = rentalStatusConfig[item.status];

          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border p-4"
            >
              <div>
                <h3 className="font-medium">{item.gearItem.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {format(new Date(item.startDate), "dd MMM")} -{" "}
                  {format(new Date(item.endDate), "dd MMM")}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${className}`}
              >
                {label}
              </span>
            </div>
          );
        })}

        {rentals.length === 0 && (
          <EmptyState
            icon={CalendarX2}
            title="No rentals history found!"
            description="Start renting outdoor gear to see your recent activity."
            buttonLabel="Browse Gear"
            buttonHref="/gear"
          />
        )}
      </div>
    </section>
  );
};

export default RecentRentals;
