import { Skeleton } from "@/components/ui/skeleton";
import GearDetailsGallerySkeleton from "./GearDetailsGallerySkeleton";
import GearDetailsInfoSkeleton from "./GearDetailsInfoSkeleton";

const GearDetailsSkeleton = () => {
  return (
    <section className="container py-12 space-y-12">
      {/* Back Button */}
      <Skeleton className="h-10 w-40 rounded-xl" />

      {/* Main Grid */}
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <GearDetailsGallerySkeleton />
        </div>

        <div className="lg:col-span-5">
          <GearDetailsInfoSkeleton />
        </div>
      </div>

      {/* Specifications */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />

        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-2xl" />
          ))}
        </div>
      </div>

      {/* Provider */}
      <Skeleton className="h-48 rounded-3xl" />
    </section>
  );
};

export default GearDetailsSkeleton;
