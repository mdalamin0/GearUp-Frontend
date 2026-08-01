import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IRental } from "../../types/type";

type Props = {
  rental: IRental;
};

const RentalActionButton = ({ rental }: Props) => {
  if (rental.status === "CONFIRMED") {
    return (
      <Button asChild size="sm">
        <Link href={`/dashboard/customer/orders/${rental.id}/pay`}>
          Pay Now
        </Link>
      </Button>
    );
  }

  if (rental.status === "RETURNED") {
    return (
      <Button variant="outline" size="sm">
        Leave Review
      </Button>
    );
  }

  if (rental.status === "FAILED") {
    return (
      <Button variant="destructive" size="sm">
        Retry Payment
      </Button>
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
