import { CalendarDays, CircleCheckBig, Clock3 } from "lucide-react";
import { getRentalOrders } from "../../_actions/customer/getRentalOrder";
import StatCard from "../shared/StatCard";
import { TRentalStatus } from "../../types/type";

const DashboardStats = async () => {
  const rentals = await getRentalOrders();

  const totalRentals = rentals.length;
  const PENDING_RENTAL_STATUS: TRentalStatus[] = [
    "PLACED",
    "CONFIRMED",
    "PAID",
    "PICKED_UP",
  ];

  const pendingOrders = rentals.filter((r) =>
    PENDING_RENTAL_STATUS.includes(r.status),
  ).length;

  const completedOrders = rentals.filter((r) => r.status === "RETURNED").length;

  return (
    <section>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Rentals"
          value={totalRentals}
          icon={CalendarDays}
          description="All rental orders"
        />

        <StatCard
          title="Pending Orders"
          value={pendingOrders}
          icon={Clock3}
          description="Orders in progress"
        />

        <StatCard
          title="Completed Orders"
          value={completedOrders}
          icon={CircleCheckBig}
          description="Returned successfully"
        />
      </div>
    </section>
  );
};

export default DashboardStats;
