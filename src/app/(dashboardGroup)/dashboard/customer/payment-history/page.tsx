import { getPayments } from "../../_actions/customer/getPayments";
import PaymentTable from "../../_components/customer/PaymentTable";


const PaymentHistoryPage = async () => {
  const payments = await getPayments();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Payment History</h1>

        <p className="text-muted-foreground">
          View all your payment transactions.
        </p>
      </div>

      <PaymentTable payments={payments} />
    </div>
  );
};

export default PaymentHistoryPage;
