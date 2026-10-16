import RentalTable from "../../_components/admin/RentalTable";
import RentalCard from "../../_components/admin/RentalCard";

import { getAllRentals } from "../../_actions/admin/getAllRentals";
import { IRental } from "../../types/type";
import GearPagination from "@/app/(publicGroup)/_components/gear/GearPagination";
import SearchInput from "@/components/shared/SearchInput";

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

const RentalOrdersPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const rentalsData = await getAllRentals({ query });
  const rentals = rentalsData?.data;
  const meta = rentalsData?.meta;
  const start = (meta.page - 1) * meta.limit + 1;
  const end = Math.min(meta.page * meta.limit, meta.total);

  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rental Orders</h1>

        <p className="mt-2 text-muted-foreground">
          Monitor and review all rental orders across the platform.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex-1 ">
          <SearchInput placeholder="Search Rental Orders..." />
        </div>
      </div>

      {/* Desktop */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {start}–{end}
          </span>{" "}
          of <span className="font-semibold text-foreground">{meta.total}</span>{" "}
          rental orders
        </p>
      </div>

      <div className="hidden lg:block">
        <RentalTable rentals={rentals} />
      </div>

      {/* Mobile */}

      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {rentals.length > 0 ? (
          rentals.map((rental: IRental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))
        ) : (
          <div className="col-span-full flex h-72 flex-col items-center justify-center rounded-xl border border-dashed">
            <h3 className="text-lg font-semibold">No Rental Orders Found</h3>

            <p className="mt-2 text-center text-sm text-muted-foreground">
              There are no rental orders available at the moment.
            </p>
          </div>
        )}
      </div>
      {/* Pagination */}

      {meta.totalPages > 1 && (
        <GearPagination currentPage={meta.page} totalPages={meta.totalPages} />
      )}
    </div>
  );
};

export default RentalOrdersPage;
