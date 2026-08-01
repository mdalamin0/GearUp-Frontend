import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IRental } from "../../types/type";
import PaymentButton from "./PaymentButton";
import ReviewDialog from "../review/ReviewDialog";

type Props = {
  rental: IRental;
};

const RentalActionButton = ({ rental }: Props) => {
  if (rental.status === "CONFIRMED") {
    return <PaymentButton orderId={rental.id} title="Pay Now" />;
  }

  if (rental.status === "RETURNED") {
    return <ReviewDialog gearId={rental.gearItem.id} />;
  }

 if (rental.status === "FAILED") {
   return (
     <PaymentButton
       orderId={rental.id}
       title="Retry Payment"
       variant="destructive"
     />
   );
 }

  if (rental.status === "PAID") {
    return (
      <Button size="sm" disabled>
        Paid
      </Button>
    );
  }

  if (rental.status === "PICKED_UP") {
    return (
      <Button size="sm" disabled>
        In Use
      </Button>
    );
  }

  if (rental.status === "PLACED") {
    return (
      <Button size="sm" disabled>
        Waiting
      </Button>
    );
  }

  if (rental.status === "CANCELLED") {
    return (
      <Button variant="secondary" size="sm" disabled>
        Cancelled
      </Button>
    );
  }

  return null;
};

export default RentalActionButton;
