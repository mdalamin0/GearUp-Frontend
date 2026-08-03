

import RentalTable from "../../_components/admin/RentalTable";
import RentalCard from "../../_components/admin/RentalCard";


import { getAllRentals } from "../../_actions/admin/getAllRentals";
import { IRental } from "../../types/type";

const RentalOrdersPage = async () => {
  const rentals = await getAllRentals();


  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rental Orders</h1>

        <p className="mt-2 text-muted-foreground">
          Monitor and review all rental orders across the platform.
        </p>
      </div>

      {/* Desktop */}

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
    </div>
  );
};

export default RentalOrdersPage;
