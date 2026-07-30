import SearchInput from "@/components/shared/SearchInput";
import BrandFilter from "./BrandFilter";
import CategoryTabs, { TCategory } from "./CategoryTabs";
import PriceFilter from "./PriceFilter";
import SortDropdown from "./SortDropdown";
import AvailabilityFilter from "./AvailabilityFilter";

type GearToolbarProps = {
  categories: TCategory[];
  brands: string[];
};

const GearToolbar = ({ categories, brands }: GearToolbarProps) => {
  return (
    <section className="space-y-8">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="heading">Browse Gear</h1>

        <p className="sub-heading mt-3">
          Discover premium outdoor and sports equipment from trusted providers.
          Search, filter, and rent with confidence.
        </p>
      </div>

      {/* Category */}
      <CategoryTabs categories={categories} />

      {/* Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex-1 ">
          <SearchInput placeholder="Search Gears..." />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 lg:w-auto">
          <BrandFilter brands={brands} />
          <PriceFilter />
          <SortDropdown />
          <AvailabilityFilter/>
        </div>
      </div>
    </section>
  );
};

export default GearToolbar;
