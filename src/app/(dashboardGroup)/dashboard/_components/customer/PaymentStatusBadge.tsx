import { Badge } from "@/components/ui/badge";
import { IPaymentStatus } from "../../types/type";

type Props = {
  status: IPaymentStatus
};

const PaymentStatusBadge = ({ status }: Props) => {
  if (status === "PAID") {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
        Paid
      </Badge>
    );
  }

  if (status === "FAILED") {
    return <Badge variant="destructive">Failed</Badge>;
  }

  return (
    <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
      Pending
    </Badge>
  );
};

export default PaymentStatusBadge;
