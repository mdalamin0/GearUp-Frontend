import Image from "next/image";
import { format } from "date-fns";
import { TableCell, TableRow } from "@/components/ui/table";
import PaymentStatusBadge from "./PaymentStatusBadge";
import { IPayment } from "../../types/type";
import CopyTransaction from "./CopyTransaction";

type Props = {
  payment: IPayment;
};

const PaymentRow = ({ payment }: Props) => {
  const image = payment.order.gearItem.image.startsWith("http")
    ? payment.order.gearItem.image
    : `https://${payment.order.gearItem.image}`;

  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-xl border">
            <Image
              src={image}
              alt={payment.order.gearItem.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold">{payment.order.gearItem.title}</h3>

            <p className="text-sm text-muted-foreground">{payment.method}</p>
          </div>
        </div>
      </TableCell>

      <TableCell>
        {" "}
        <CopyTransaction transactionId={payment.transactionId} />
      </TableCell>

      <TableCell>৳{payment.amount}</TableCell>

      <TableCell> {format(new Date(payment.paidAt), "dd MMM yyyy")}</TableCell>

      <TableCell>
        <PaymentStatusBadge status={payment.status} />
      </TableCell>
    </TableRow>
  );
};

export default PaymentRow;
