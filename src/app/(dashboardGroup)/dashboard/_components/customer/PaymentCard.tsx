import Image from "next/image";
import { format } from "date-fns";
import PaymentStatusBadge from "./PaymentStatusBadge";
import { IPayment } from "../../types/type";
import CopyTransaction from "./CopyTransaction";

type Props = {
  payment: IPayment;
};

const PaymentCard = ({ payment }: Props) => {
  const image = payment.order.gearItem.image.startsWith("http")
    ? payment.order.gearItem.image
    : `https://${payment.order.gearItem.image}`;

  return (
    <div className="rounded-2xl border bg-background p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-xl border">
          <Image
            src={image}
            alt={payment.order.gearItem.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold">{payment.order.gearItem.title}</h3>

          <p className="text-sm text-muted-foreground">{payment.method}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex items-start justify-between gap-3">
          <span className="text-muted-foreground shrink-0">Transaction</span>

          <CopyTransaction transactionId={payment.transactionId} />
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Amount</span>

          <span>${payment.amount}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Paid At</span>

          <span>{format(new Date(payment.paidAt), "dd MMM yyyy")}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Status</span>

          <PaymentStatusBadge status={payment.status} />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
