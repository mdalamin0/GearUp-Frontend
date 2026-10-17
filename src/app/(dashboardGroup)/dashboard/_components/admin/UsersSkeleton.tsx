import { Skeleton } from "@/components/ui/skeleton";

const UsersSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-6">
      {/* Header */}
      <div className="min-w-0">
        <Skeleton className="h-9 w-64 max-w-full" />
        <Skeleton className="mt-3 h-4 w-full max-w-[380px]" />
      </div>

      {/* Search and Filters */}
      <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Skeleton className="h-10 w-full max-w-md rounded-md" />

        <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
          <Skeleton className="h-10 w-full sm:w-32" />
        </div>
      </div>

      {/* Count */}
      <div className="mb-6 flex min-w-0 items-center justify-between">
        <Skeleton className="h-5 w-56 max-w-full" />
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-xl border lg:block">
        <div className="grid grid-cols-5 gap-4 border-b bg-muted/30 px-5 py-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-20 max-w-full" />
          ))}
        </div>

        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center gap-4 border-b px-5 py-5 last:border-b-0"
          >
            <div className="min-w-0 space-y-2">
              <Skeleton className="h-4 w-32 max-w-full" />
              <Skeleton className="h-3 w-40 max-w-full" />
            </div>

            <Skeleton className="h-6 w-16 max-w-full rounded-full" />
            <Skeleton className="h-6 w-16 max-w-full rounded-full" />
            <Skeleton className="h-4 w-24 max-w-full" />
            <Skeleton className="ml-auto h-9 w-28 max-w-full rounded-md" />
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="grid min-w-0 grid-cols-1 gap-4 lg:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="min-w-0 space-y-4 rounded-xl border p-4">
            {/* User Info */}
            <div className="min-w-0 space-y-2">
              <Skeleton className="h-5 w-36 max-w-full" />
              <Skeleton className="h-4 w-full max-w-[240px]" />
            </div>

            {/* Role and Status */}
            <div className="grid grid-cols-2 gap-4">
              <div className="min-w-0 space-y-2">
                <Skeleton className="h-3 w-12 max-w-full" />
                <Skeleton className="h-6 w-16 max-w-full rounded-full" />
              </div>

              <div className="min-w-0 space-y-2">
                <Skeleton className="h-3 w-16 max-w-full" />
                <Skeleton className="h-6 w-16 max-w-full rounded-full" />
              </div>
            </div>

            {/* Additional Info */}
            <div className="min-w-0 space-y-2">
              <Skeleton className="h-3 w-20 max-w-full" />
              <Skeleton className="h-4 w-24 max-w-full" />
            </div>

            {/* Action */}
            <Skeleton className="h-9 w-full rounded-md" />
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

export default UsersSkeleton;
