import { Skeleton } from "@/components/ui/skeleton";

const GearCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <Skeleton className="aspect-[4/3] w-full" />

      <div className="space-y-4 p-5">
        <Skeleton className="h-5 w-20 rounded-full" />

        <Skeleton className="h-6 w-3/4" />

        <Skeleton className="h-4 w-1/2" />

        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>

        <Skeleton className="h-10 w-full rounded-xl" />
      </div>
    </div>
  );
};

export default GearCardSkeleton;
