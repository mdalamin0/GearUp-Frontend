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

type Props = {
  payments: IPayment[];
};

const PaymentTable = ({ payments }: Props) => {
  return (
    <>
      {/* Mobile */}

      <div className="space-y-4 lg:hidden">
        {payments.map((payment) => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </div>

      {/* Desktop */}

      <div className="hidden overflow-hidden rounded-2xl border bg-background lg:block">
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
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default PaymentTable;
