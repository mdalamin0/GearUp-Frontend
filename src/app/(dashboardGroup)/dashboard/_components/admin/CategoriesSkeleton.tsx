import { Skeleton } from "@/components/ui/skeleton";

const CategoriesSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-6">
      {/* Header */}
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 space-y-2">
          <Skeleton className="h-9 w-40 max-w-full" />
          <Skeleton className="mt-2 h-4 w-full max-w-[320px]" />
        </div>

        <Skeleton className="h-10 w-full shrink-0 rounded-md sm:w-32" />
      </div>

      {/* Count */}
      <div className="flex min-w-0 items-center justify-between">
        <Skeleton className="h-4 w-36 max-w-full" />
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-xl border lg:block">
        {/* Table Header */}
        <div className="grid grid-cols-3 gap-4 border-b bg-muted/30 px-5 py-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-20 max-w-full" />
          ))}
        </div>

        {/* Table Rows */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center gap-4 border-b px-5 py-5 last:border-b-0"
          >
            <div className="flex min-w-0 items-center gap-3">
              <Skeleton className="size-10 shrink-0 rounded-lg" />

              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-4 w-32 max-w-full" />
                <Skeleton className="h-3 w-20 max-w-full" />
              </div>
            </div>

            <Skeleton className="h-6 w-16 max-w-full rounded-full" />

            <div className="flex min-w-0 justify-end gap-2">
              <Skeleton className="h-9 w-20 max-w-full rounded-md" />
              <Skeleton className="h-9 w-20 max-w-full rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="min-w-0 space-y-4 overflow-hidden rounded-xl border p-4"
          >
            <div className="flex min-w-0 items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <Skeleton className="size-12 shrink-0 rounded-lg" />

                <div className="min-w-0 flex-1 space-y-2">
                  <Skeleton className="h-5 w-32 max-w-full" />
                  <Skeleton className="h-4 w-20 max-w-full" />
                </div>
              </div>

              <Skeleton className="h-6 w-16 shrink-0 rounded-full" />
            </div>

            <div className="flex min-w-0 justify-end gap-2 border-t pt-3">
              <Skeleton className="h-9 w-20 max-w-full rounded-md" />
              <Skeleton className="h-9 w-20 max-w-full rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;
