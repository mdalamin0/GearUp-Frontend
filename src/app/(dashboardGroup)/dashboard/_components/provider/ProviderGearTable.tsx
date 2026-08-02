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
import { getCategories } from "@/app/(publicGroup)/_actions/gear/getCategories";

type Props = {
  gears: IGear[];
};

const ProviderGearTable = async({ gears }: Props) => {
  const categories = await getCategories();
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
              <ProviderGearRow key={gear.id} gear={gear} categories={categories} />
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile */}

      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {gears.map((gear) => (
          <ProviderGearCard key={gear.id} gear={gear} categories={categories}/>
        ))}
      </div>
    </>
  );
};

export default ProviderGearTable;
