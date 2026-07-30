import { Skeleton } from "@/components/ui/skeleton";

const GearToolbarSkeleton = () => {
  return (
    <section className="space-y-8">
      {/* Heading */}
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <Skeleton className="mx-auto h-10 w-64" />
        <Skeleton className="mx-auto h-4 w-full max-w-xl" />
        <Skeleton className="mx-auto h-4 w-3/4" />
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-3 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full" />
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <Skeleton className="h-11 flex-1 rounded-xl" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 lg:w-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-11 w-full min-w-[160px] rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearToolbarSkeleton;
