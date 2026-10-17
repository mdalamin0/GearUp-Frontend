import { Skeleton } from "@/components/ui/skeleton";

const RentalOrdersSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-6">
      {/* Header */}
      <div className="min-w-0">
        <Skeleton className="h-9 w-56 max-w-full" />
        <Skeleton className="mt-3 h-4 w-full max-w-[420px]" />
      </div>

      {/* Search */}
      <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center">
        <div className="min-w-0 flex-1">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>

      {/* Rental Count */}
      <div className="flex min-w-0 items-center justify-between">
        <Skeleton className="h-4 w-64 max-w-full" />
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-xl border bg-card lg:block">
        {/* Table Header */}
        <div className="grid grid-cols-7 gap-4 border-b bg-muted/30 px-5 py-4">
          {[
            "Customer",
            "Gear",
            "Category",
            "Rental Period",
            "Qty",
            "Total",
            "Status",
          ].map((item) => (
            <Skeleton
              key={item}
              className={`h-4 max-w-full ${
                item === "Rental Period" ? "w-24" : "w-20"
              }`}
            />
          ))}
        </div>

        {/* Table Rows */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-7 items-center gap-4 border-b px-5 py-5 last:border-b-0"
          >
            {/* Customer */}
            <div className="min-w-0 space-y-2">
              <Skeleton className="h-4 w-24 max-w-full" />
              <Skeleton className="h-3 w-full max-w-[120px]" />
            </div>

            {/* Gear */}
            <div className="min-w-0 space-y-2">
              <Skeleton className="h-4 w-28 max-w-full" />
              <Skeleton className="h-3 w-16 max-w-full" />
            </div>

            {/* Category */}
            <Skeleton className="h-6 w-20 max-w-full rounded-full" />

            {/* Rental Period */}
            <div className="min-w-0 space-y-2">
              <Skeleton className="h-4 w-24 max-w-full" />
              <Skeleton className="h-4 w-20 max-w-full" />
            </div>

            {/* Quantity */}
            <Skeleton className="h-4 w-8 max-w-full" />

            {/* Total */}
            <Skeleton className="h-4 w-16 max-w-full" />

            {/* Status */}
            <Skeleton className="h-6 w-24 max-w-full rounded-full" />
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="min-w-0 overflow-hidden rounded-xl border bg-card"
          >
            {/* Card Header */}
            <div className="min-w-0 space-y-2 p-6 pb-4">
              <Skeleton className="h-5 w-36 max-w-full" />
              <Skeleton className="h-4 w-20 max-w-full" />
            </div>

            {/* Card Content */}
            <div className="min-w-0 space-y-4 px-6 pb-6">
              {/* Customer */}
              <div className="flex min-w-0 items-start justify-between gap-3">
                <Skeleton className="mt-1 h-4 w-16 shrink-0" />

                <div className="min-w-0 space-y-2 text-right">
                  <Skeleton className="ml-auto h-4 w-28 max-w-full" />
                  <Skeleton className="ml-auto h-3 w-full max-w-[160px]" />
                </div>
              </div>

              {/* Category */}
              <div className="flex min-w-0 items-center justify-between gap-3">
                <Skeleton className="h-4 w-16 shrink-0" />
                <Skeleton className="h-6 w-20 max-w-full rounded-full" />
              </div>

              {/* Rental Period */}
              <div className="flex min-w-0 items-start justify-between gap-3">
                <Skeleton className="mt-1 h-4 w-14 shrink-0" />

                <div className="min-w-0 space-y-2">
                  <Skeleton className="ml-auto h-4 w-24 max-w-full" />
                  <Skeleton className="ml-auto h-4 w-24 max-w-full" />
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-8" />
              </div>

              {/* Total */}
              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-16" />
              </div>

              {/* Status */}
              <div className="flex items-center justify-between gap-3">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-6 w-24 max-w-full rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex min-w-0 flex-col items-center justify-between gap-4 sm:flex-row">
        <Skeleton className="h-4 w-36 max-w-full" />

        <div className="flex max-w-full flex-wrap items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="size-9 shrink-0 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentalOrdersSkeleton;
