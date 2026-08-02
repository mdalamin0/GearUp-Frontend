import { Boxes, ShoppingBag, Users } from "lucide-react";
import StatCard from "../_components/shared/StatCard";
import QuickActions from "../_components/admin/QuickActions";
import { getAllUsers } from "../_actions/admin/getAllUsers";
import { getAllGears } from "../_actions/admin/getAllGears";
import { getAllRentals } from "../_actions/admin/getAllRentals";

const AdminDashboardPage = async () => {
  const users = await getAllUsers();
  const gears = await getAllGears();
  const orders = await getAllRentals();

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>

        <p className="mt-2 text-muted-foreground">
          Monitor platform activity, manage users, gear listings, and rental
          operations from one place.
        </p>
      </div>

      {/* Stats */}

      <section className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 ">
        <StatCard
          title="Total Users"
          value={users.data.meta.total}
          description="Registered platform users"
          icon={Users}
        />

        <StatCard
          title="Active Gear"
          value={gears.meta.total}
          description="Available rental gear"
          icon={Boxes}
        />

        <StatCard
          title="Total Rentals"
          value={orders.length}
          description="Rental orders created"
          icon={ShoppingBag}
        />
      </section>

      {/* Quick Actions */}

      <QuickActions />
    </div>
  );
};

export default AdminDashboardPage;
