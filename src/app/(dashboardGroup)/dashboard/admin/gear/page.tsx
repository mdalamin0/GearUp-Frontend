import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";



// import GearFilters from "./_components/GearFilters";

import GearToolbar from "@/app/(publicGroup)/_components/gear/GearToolbar";
import { getCategories } from "@/app/(publicGroup)/_actions/gear/getCategories";
import { getBrands } from "@/app/(publicGroup)/_actions/gear/getBrands";
import { getAllGears } from "../../_actions/admin/getAllGears";
import GearPagination from "@/app/(publicGroup)/_components/gear/GearPagination";
import SearchInput from "@/components/shared/SearchInput";
import BrandFilter from "@/app/(publicGroup)/_components/gear/BrandFilter";
import PriceFilter from "@/app/(publicGroup)/_components/gear/PriceFilter";
import SortDropdown from "@/app/(publicGroup)/_components/gear/SortDropdown";
import AvailabilityFilter from "@/app/(publicGroup)/_components/gear/AvailabilityFilter";
import CategoryTabs from "@/app/(publicGroup)/_components/gear/CategoryTabs";
import GearTable from "../../_components/admin/GearTable";
import AdminGearCard from "../../_components/admin/AdminGearCard";
import { IGear } from "@/types/type";

type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

const GearManagementPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  const gears = await getAllGears({query});
  const meta = gears.data.meta;
  const start = (meta.page - 1) * meta.limit + 1;
  const end = Math.min(meta.page * meta.limit, meta.total);
  // const categories = await getCategories();
  const brands = await getBrands();



  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gear Management</h1>

        <p className="mt-2 text-muted-foreground">
          Browse and monitor all gear listings across the platform.
        </p>
      </div>

      {/* <div className="">
        <CategoryTabs categories={categories}></CategoryTabs>
      </div> */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex-1 ">
          <SearchInput placeholder="Search Gears..." />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 lg:w-auto">
          <BrandFilter brands={brands} />
          <PriceFilter />
          <SortDropdown />
          <AvailabilityFilter />
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
          gears
        </p>
      </div>
      <div className="hidden lg:block">
        <GearTable gears={gears.data.data} />
      </div>

      {/* Mobile */}

      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {gears.data.data.length > 0 ? (
          gears.data.data.map((gear: IGear) => (
            <AdminGearCard key={gear.id} gear={gear} />
          ))
        ) : (
          <div className="col-span-full flex h-72 flex-col items-center justify-center rounded-xl border border-dashed">
            <h3 className="text-lg font-semibold">No Gear Found</h3>

            <p className="mt-2 text-center text-sm text-muted-foreground">
              No gear matches your current search or filters.
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

export default GearManagementPage;
