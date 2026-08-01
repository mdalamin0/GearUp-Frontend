import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
} from "@/components/ui/table";

import RentalRow from "./RentalRow";
import RentalCard from "./RentalCard";
import { IRental } from "../../types/type";
type Props = {
  rentals: IRental[];
};

const RentalTable = ({ rentals }: Props) => {
  return (
    <>
      {/* Mobile */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 lg:hidden">
        {rentals.map((item) => (
          <RentalCard key={item.id} rental={item} />
        ))}
      </div>

      {/* Desktop */}

      <div className="hidden lg:block rounded-2xl border bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gear</TableHead>

              <TableHead>Rental Date</TableHead>

              <TableHead>Amount</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {rentals.map((item) => (
              <RentalRow key={item.id} rental={item} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default RentalTable;
