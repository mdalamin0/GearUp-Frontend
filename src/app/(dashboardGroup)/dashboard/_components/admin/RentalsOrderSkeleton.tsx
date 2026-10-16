import { Skeleton } from "@/components/ui/skeleton";

const RentalOrdersSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-56" />
        <Skeleton className="h-5 w-80 max-w-full" />
      </div>

      {/* Search */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <Skeleton className="h-10 w-full flex-1 rounded-md" />
      </div>

      {/* Rental Count */}
      <div className="mb-6 flex items-center justify-between">
        <Skeleton className="h-5 w-64 max-w-full" />
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-xl border lg:block">
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 border-b bg-muted/30 px-5 py-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-20 max-w-full" />
          ))}
        </div>

        {/* Table Rows */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-6 items-center gap-4 border-b px-5 py-5 last:border-b-0"
          >
            <div className="space-y-2">
              <Skeleton className="h-4 w-24 max-w-full" />
              <Skeleton className="h-3 w-16 max-w-full" />
            </div>

            <div className="flex items-center gap-3">
              <Skeleton className="size-10 shrink-0 rounded-lg" />
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-4 w-full max-w-28" />
                <Skeleton className="h-3 w-16 max-w-full" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-24 max-w-full" />
              <Skeleton className="h-3 w-16 max-w-full" />
            </div>

            <Skeleton className="h-6 w-20 rounded-full" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-20 max-w-full" />
              <Skeleton className="h-3 w-14 max-w-full" />
            </div>

            <div className="flex justify-end gap-2">
              <Skeleton className="size-8 rounded-md" />
              <Skeleton className="size-8 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4 rounded-xl border p-4">
            {/* Card Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-5 w-32 max-w-full" />
                <Skeleton className="h-4 w-24 max-w-full" />
              </div>

              <Skeleton className="h-6 w-20 shrink-0 rounded-full" />
            </div>

            {/* Gear Item */}
            <div className="flex items-center gap-3">
              <Skeleton className="size-14 shrink-0 rounded-lg" />
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-4 w-36 max-w-full" />
                <Skeleton className="h-3 w-24 max-w-full" />
              </div>
            </div>

            {/* Rental Details */}
            <div className="grid grid-cols-2 gap-4 border-t pt-4">
              {Array.from({ length: 4 }).map((_, detailIndex) => (
                <div key={detailIndex} className="space-y-2">
                  <Skeleton className="h-3 w-20 max-w-full" />
                  <Skeleton className="h-4 w-24 max-w-full" />
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2 border-t pt-3">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Skeleton className="h-4 w-36" />

        <div className="flex items-center gap-2">
          <Skeleton className="size-9 rounded-md" />
          <Skeleton className="size-9 rounded-md" />
          <Skeleton className="size-9 rounded-md" />
          <Skeleton className="size-9 rounded-md" />
          <Skeleton className="size-9 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default RentalOrdersSkeleton;
