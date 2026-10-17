import { Skeleton } from "@/components/ui/skeleton";

const GearSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-6">
      {/* Header */}
      <div className="min-w-0">
        <Skeleton className="h-9 w-56 max-w-full" />
        <Skeleton className="mt-3 h-4 w-full max-w-[420px]" />
      </div>

      {/* Search and Filters */}
      <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center">
        <div className="min-w-0 flex-1">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:w-auto lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-10 w-full rounded-md lg:w-32" />
          ))}
        </div>
      </div>

      {/* Count */}
      <div className="flex min-w-0 items-center justify-between">
        <Skeleton className="h-4 w-56 max-w-full" />
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-xl border bg-card lg:block">
        {/* Table Header */}
        <div className="grid grid-cols-7 gap-4 border-b bg-muted/30 px-5 py-4">
          {[
            "Gear",
            "Provider",
            "Category",
            "Price",
            "Stock",
            "Featured",
            "Action",
          ].map((item) => (
            <Skeleton
              key={item}
              className={`h-4 max-w-full ${
                item === "Action" ? "ml-auto w-14" : "w-20"
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
            {/* Gear */}
            <div className="min-w-0 space-y-2">
              <Skeleton className="h-4 w-28 max-w-full" />
              <Skeleton className="h-3 w-16 max-w-full" />
            </div>

            {/* Provider */}
            <div className="min-w-0 space-y-2">
              <Skeleton className="h-4 w-24 max-w-full" />
              <Skeleton className="h-3 w-full max-w-[120px]" />
            </div>

            {/* Category */}
            <Skeleton className="h-6 w-20 max-w-full rounded-full" />

            {/* Price */}
            <Skeleton className="h-4 w-16 max-w-full" />

            {/* Stock */}
            <Skeleton className="h-6 w-24 max-w-full rounded-full" />

            {/* Featured */}
            <Skeleton className="h-6 w-20 max-w-full rounded-full" />

            {/* Actions */}
            <div className="flex min-w-0 justify-end gap-2">
              <Skeleton className="h-9 w-16 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
            </div>
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
            <div className="min-w-0 space-y-2 px-6 pt-6 pb-4">
              <Skeleton className="h-5 w-36 max-w-full" />
              <Skeleton className="h-4 w-20 max-w-full" />
            </div>

            {/* Card Content */}
            <div className="min-w-0 space-y-4 px-6 pb-6">
              {/* Provider */}
              <div className="flex min-w-0 items-start gap-2">
                <Skeleton className="mt-0.5 size-4 shrink-0 rounded" />
                <div className="min-w-0 flex-1 space-y-2">
                  <Skeleton className="h-4 w-28 max-w-full" />
                  <Skeleton className="h-3 w-full max-w-[180px]" />
                </div>
              </div>

              {/* Category */}
              <div className="flex min-w-0 items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <Skeleton className="size-4 shrink-0 rounded" />
                  <Skeleton className="h-4 w-16 max-w-full" />
                </div>
                <Skeleton className="h-6 w-20 max-w-full rounded-full" />
              </div>

              {/* Rental Price */}
              <div className="flex min-w-0 items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <Skeleton className="size-4 shrink-0 rounded" />
                  <Skeleton className="h-4 w-20 max-w-full" />
                </div>
                <Skeleton className="h-4 w-16 shrink-0" />
              </div>

              {/* Stock */}
              <div className="flex min-w-0 items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <Skeleton className="size-4 shrink-0 rounded" />
                  <Skeleton className="h-4 w-10 max-w-full" />
                </div>
                <Skeleton className="h-6 w-24 max-w-full rounded-full" />
              </div>

              {/* Featured */}
              <div className="flex min-w-0 items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <Skeleton className="size-4 shrink-0 rounded" />
                  <Skeleton className="h-4 w-16 max-w-full" />
                </div>
                <Skeleton className="h-6 w-20 max-w-full rounded-full" />
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Skeleton className="h-9 w-full rounded-md" />
                <Skeleton className="h-9 w-full rounded-md" />
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

export default GearSkeleton;
