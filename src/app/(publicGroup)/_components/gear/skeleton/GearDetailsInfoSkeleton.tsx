import { Skeleton } from "@/components/ui/skeleton";

const GearDetailsInfoSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* Badge */}
      <Skeleton className="h-7 w-24 rounded-full" />

      {/* Title */}
      <div className="space-y-3">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>

      {/* Price */}
      <Skeleton className="h-12 w-40" />

      {/* Stock */}
      <Skeleton className="h-16 rounded-xl" />

      {/* Description */}
      <div className="space-y-3">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>

      {/* Rent Card */}
      <Skeleton className="h-[470px] rounded-3xl" />
    </div>
  );
};

export default GearDetailsInfoSkeleton;
