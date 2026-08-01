import { rentalStatusConfig } from "@/utils/rental-status";
import { TRentalStatus } from "../../types/type";

type Props = {
  status: TRentalStatus;
};

const RentalStatusBadge = ({ status }: Props) => {
  const currentStatus = rentalStatusConfig[status];

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${currentStatus.className}`}
    >
      {currentStatus.label}
    </span>
  );
};

export default RentalStatusBadge;
