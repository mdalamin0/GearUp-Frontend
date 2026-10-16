import { Skeleton } from "@/components/ui/skeleton";

const UsersSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-48 max-w-full" />
        <Skeleton className="h-5 w-80 max-w-full" />
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Skeleton className="h-10 w-full max-w-md rounded-md" />
        <Skeleton className="h-10 w-32 rounded-md" />
      </div>

      {/* Count */}
      <div className="mb-6 flex items-center justify-between">
        <Skeleton className="h-5 w-56 max-w-full" />
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-xl border lg:block">
        <div className="grid grid-cols-5 gap-4 border-b bg-muted/30 px-5 py-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-20" />
          ))}
        </div>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center gap-4 border-b px-5 py-5 last:border-b-0"
          >
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 max-w-full" />
              <Skeleton className="h-3 w-40 max-w-full" />
            </div>
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="ml-auto h-9 w-28 rounded-md" />
          </div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4 rounded-xl border p-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-36 max-w-full" />
              <Skeleton className="h-4 w-48 max-w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-9 w-full rounded-md" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Skeleton className="h-4 w-36" />
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="size-9 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersSkeleton;
