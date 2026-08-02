import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { IGear } from "@/types/type";
import ProviderGearRow from "./ProviderGearRow";
import ProviderGearCard from "./ProviderGearCard";
import { PackageSearch } from "lucide-react";
import EmptyState from "../shared/EmptyState";

type Props = {
  gears: IGear[];
};

const ProviderGearTable = ({ gears }: Props) => {
  if (gears.length === 0) {
    return (
      <EmptyState
        icon={PackageSearch}
        title="No gear found"
        description="Start by adding your first rental gear."
      />
    );
  }

  return (
    <>
      {/* Desktop */}

      <div className="hidden overflow-hidden rounded-2xl border bg-background lg:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gear</TableHead>

              <TableHead>Price</TableHead>

              <TableHead>Stock</TableHead>

              <TableHead>Featured</TableHead>

              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {gears.map((gear) => (
              <ProviderGearRow key={gear.id} gear={gear} />
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile */}

      <div className="grid gap-4 lg:hidden">
        {gears.map((gear) => (
          <ProviderGearCard key={gear.id} gear={gear} />
        ))}
      </div>
    </>
  );
};

export default ProviderGearTable;
