import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { IPayment } from "../../types/type";
import PaymentRow from "./PaymentRow";
import PaymentCard from "./PaymentCard";
import { WalletCards } from "lucide-react";
import EmptyState from "../shared/EmptyState";

type Props = {
  payments: IPayment[];
};

const PaymentTable = ({ payments }: Props) => {

   if (payments.length === 0) {
     return (
       <EmptyState
         icon={WalletCards}
         title="No Payment History"
         description="Your completed payment transactions will appear here."
       />
     );
   }

  return (
    <>
      {/* Mobile */}

      <div className="space-y-4 lg:hidden">
        {payments.map((payment) => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </div>

      {/* Desktop */}

      <div className="hidden overflow-hidden rounded-2xl border bg-background lg:block ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gear</TableHead>

              <TableHead>Transaction</TableHead>

              <TableHead>Amount</TableHead>

              <TableHead>Paid At</TableHead>

              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {payments.map((payment) => (
              <PaymentRow key={payment.id} payment={payment} />
            ))}
            {payments.length === 0 && (
              <div className="rounded-xl border border-dashed py-10 text-center">
                <p className="text-muted-foreground">
                  No payment history found.
                </p>
              </div>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default PaymentTable;
