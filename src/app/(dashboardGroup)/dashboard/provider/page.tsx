import Link from "next/link";
import {
  Plus,
  PackagePlus,
  Package,
  Boxes,
  Star,
  PackageCheck,
  Clock3,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { getMyGear } from "../_actions/provider/getMyGear";
import EmptyState from "../_components/shared/EmptyState";

import StatCard from "../_components/shared/StatCard";
import ProviderGearTable from "../_components/provider/ProviderGearTable";
import { getProviderOrders } from "../_actions/provider/getProviderOrders";

const ProviderDashboardPage = async () => {
  const gears = await getMyGear();
  const orders = await getProviderOrders();

  const activeRentals = orders.filter(
    (order) => order.status === "PICKED_UP",
  ).length;

  const pendingOrders = orders.filter(
    (order) => order.status === "PLACED",
  ).length;

  const totalGear = gears.length;


  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Provider Dashboard</h1>

          <p className="mt-1 text-muted-foreground">
            Manage your rental inventory and incoming gear requests.
          </p>
        </div>

        <Button asChild className="h-11 rounded-xl">
          <Link href="/dashboard/provider/gear/new">
            <Plus className="mr-2 size-4" />
            Add New Gear
          </Link>
        </Button>
      </div>

      {/* Empty */}

      {gears.length === 0 ? (
        <EmptyState
          icon={PackagePlus}
          title="No gear added yet"
          description="Create your first rental gear and start receiving rental requests."
          buttonLabel="Add New Gear"
          buttonHref="/dashboard/provider/gear/new"
        />
      ) : (
        <>
          {/* Stats */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <StatCard
              title="Total Gear"
              value={totalGear}
              icon={Package}
              description="Total gear listed in your inventory"
            />

            <StatCard
              title="Active Rentals"
              value={activeRentals}
              icon={PackageCheck}
              description="Currently rented by customers"
            />

            <StatCard
              title="Pending Orders"
              value={pendingOrders}
              icon={Clock3}
              description="Waiting for your confirmation"
            />
          </div>

          {/* Table */}

          <ProviderGearTable gears={gears} />
        </>
      )}
    </div>
  );
};

export default ProviderDashboardPage;
