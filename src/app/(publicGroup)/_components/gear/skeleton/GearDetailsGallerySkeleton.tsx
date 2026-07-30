import { Skeleton } from "@/components/ui/skeleton";

const GearDetailsGallerySkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="aspect-[4/3] w-full rounded-3xl" />

      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="aspect-square rounded-2xl" />
        ))}
      </div>
    </div>
  );
};

export default GearDetailsGallerySkeleton;
