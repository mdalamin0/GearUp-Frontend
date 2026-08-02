import { ClipboardList, Clock3, CheckCircle2 } from "lucide-react";
import { getProviderOrders } from "../../_actions/provider/getProviderOrders";
import StatCard from "../../_components/shared/StatCard";
import OrdersTable from "../../_components/provider/order-page/OrdersTable";
import OrderCard from "../../_components/provider/order-page/OrderCard";


const OrdersPage = async () => {
  const orders = await getProviderOrders();

  const totalOrders = orders.length;

  const pendingOrders = orders.filter((order) =>
    ["PLACED", "CONFIRMED", "PICKED_UP"].includes(order.status),
  ).length;

  const completedOrders = orders.filter(
    (order) => order.status === "RETURNED",
  ).length;

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Rental Orders</h1>

        <p className="text-muted-foreground">
          Manage incoming rental requests from customers.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Total Orders"
          value={totalOrders}
          icon={ClipboardList}
          description="All rental requests received"
        />

        <StatCard
          title="Pending Orders"
          value={pendingOrders}
          icon={Clock3}
          description="Awaiting your action"
        />

        <StatCard
          title="Completed Orders"
          value={completedOrders}
          icon={CheckCircle2}
          description="Successfully returned rentals"
        />
      </div>

      {/* Desktop */}

      <div className="hidden lg:block">
        <OrdersTable orders={orders} />
      </div>

      {/* Mobile */}

      <div className="space-y-4 lg:hidden">
        <div className="space-y-4 lg:hidden">
          {orders.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <div className="flex h-72 flex-col items-center justify-center rounded-xl border border-dashed">
              <ClipboardList className="mb-4 size-14 text-muted-foreground" />

              <h3 className="text-lg font-semibold">No Orders Found</h3>

              <p className="mt-2 max-w-xs text-center text-sm text-muted-foreground">
                You haven&apos;t received any rental requests yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
