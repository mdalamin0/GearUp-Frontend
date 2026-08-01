import Image from "next/image";
import { format } from "date-fns";
import { TableCell, TableRow } from "@/components/ui/table";
import RentalStatusBadge from "./RentalStatusBadge";
import RentalActionButton from "./RentalActionButton";
import { IRental } from "../../types/type";

type Props = {
  rental: IRental;
};

const RentalRow = ({ rental }: Props) => {
  const image = rental.gearItem.image.startsWith("http")
    ? rental.gearItem.image
    : `https://${rental.gearItem.image}`;
  return (
    <TableRow>
      {/* Gear */}
      <TableCell>
        <div className="flex items-center gap-4 overflow-x-hidden">
          <div className="relative h-16 w-16 overflow-hidden rounded-xl border">
            <Image
              src={image}
              alt={rental.gearItem.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold">{rental.gearItem.title}</h3>

            <p className="text-sm text-muted-foreground">
              {rental.gearItem.category.name}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Qty : {rental.quantity}
            </p>
          </div>
        </div>
      </TableCell>

      {/* Rental Date */}

      <TableCell>
        <div className="space-y-1">
          <p>{format(new Date(rental.startDate), "dd MMM yyyy")}</p>

          <p className="text-sm text-muted-foreground">
            to {format(new Date(rental.endDate), "dd MMM yyyy")}
          </p>
        </div>
      </TableCell>

      {/* Amount */}

      <TableCell>${rental.totalAmount}</TableCell>

      {/* Status */}

      <TableCell>
        <RentalStatusBadge status={rental.status} />
      </TableCell>

      {/* Action */}

      <TableCell className="text-right">
        <RentalActionButton rental={rental} />
      </TableCell>
    </TableRow>
  );
};

export default RentalRow;
