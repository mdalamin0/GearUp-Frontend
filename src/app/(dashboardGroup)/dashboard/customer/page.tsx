import DashboardStats from "../_components/customer/DashboardStats";
import QuickActions from "../_components/customer/QuickActions";
import RecentRentals from "../_components/customer/RecentRentals";


const CustomerDashboardPage = () => {
  return (
    <div className="space-y-8">
      <section>

        <h1 className="mt-1 text-3xl font-bold">Customer Dashboard</h1>
      </section>

      <DashboardStats />

      <RecentRentals />

      <QuickActions />
    </div>
  );
};

export default CustomerDashboardPage;
