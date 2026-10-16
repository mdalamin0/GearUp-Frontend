import { Skeleton } from "@/components/ui/skeleton";

const CategoriesSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-9 w-40 max-w-full" />
          <Skeleton className="h-5 w-72 max-w-full" />
        </div>
        <Skeleton className="h-10 w-32 rounded-md" />
      </div>

      {/* Count */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-44 max-w-full" />
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-xl border lg:block">
        <div className="grid grid-cols-3 gap-4 border-b bg-muted/30 px-5 py-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-20" />
          ))}
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center gap-4 border-b px-5 py-5 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32 max-w-full" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
            <Skeleton className="h-6 w-16 rounded-full" />
            <div className="flex justify-end gap-2">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4 rounded-xl border p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Skeleton className="size-12 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-32 max-w-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="flex justify-end gap-2 border-t pt-3">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
