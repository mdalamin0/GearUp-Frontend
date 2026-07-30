import { Skeleton } from "@/components/ui/skeleton";
import GearCardSkeleton from "./GearCardSkeleton";
import GearToolbarSkeleton from "./GearToolbarSkeleton";

const GearGridSkeleton = () => {
  return (
    <section className="py-10 container">
      {/* Toolbar */}
      <GearToolbarSkeleton />

      {/* Showing Result */}
      <div className="py-3">
        <Skeleton className="h-5 w-44 " />
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <GearCardSkeleton key={index} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pt-6">
        {Array.from({ length: 7 }).map((_, index) => (
          <Skeleton key={index} className="h-10 w-10 rounded-md" />
        ))}
      </div>
    </section>
  );
};

export default GearGridSkeleton;
