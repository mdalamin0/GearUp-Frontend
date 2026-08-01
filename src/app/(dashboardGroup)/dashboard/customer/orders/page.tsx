import { getRentalOrders } from "../../_actions/customer/getRentalOrder";
import RentalTable from "../../_components/customer/RentalTable";


const CustomerOrdersPage = async () => {
  const rentals = await getRentalOrders();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Rentals</h1>

        <p className="text-muted-foreground">
          Track your rental orders and payments.
        </p>
      </div>

      <RentalTable rentals={rentals} />
    </div>
  );
};

export default CustomerOrdersPage;
