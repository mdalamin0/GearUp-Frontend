import Image from "next/image";
import { format } from "date-fns";
import { IRental } from "../../types/type";
import RentalStatusBadge from "./RentalStatusBadge";
import RentalActionButton from "./RentalActionButton";

type Props = {
  rental: IRental;
};

const RentalCard = ({ rental }: Props) => {
  const image = rental.gearItem.image.startsWith("http")
    ? rental.gearItem.image
    : `https://${rental.gearItem.image}`;

  return (
    <div className="rounded-2xl border bg-background p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border">
          <Image
            src={image}
            alt={rental.gearItem.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold">{rental.gearItem.title}</h3>

          <p className="text-sm text-muted-foreground">
            {rental.gearItem.category.name}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Qty: {rental.quantity}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Rental</span>

          <span>
            {format(new Date(rental.startDate), "dd MMM")} -{" "}
            {format(new Date(rental.endDate), "dd MMM")}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Amount</span>

          <span>${rental.totalAmount}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Status</span>

          <RentalStatusBadge status={rental.status} />
        </div>
      </div>

      <div className="mt-4">
        <RentalActionButton rental={rental} />
      </div>
    </div>
  );
};

export default RentalCard;
