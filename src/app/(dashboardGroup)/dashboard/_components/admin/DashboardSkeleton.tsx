import { Skeleton } from "@/components/ui/skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="w-full space-y-8">
      {/* Header */}
      <div className="min-w-0">
        <Skeleton className="h-9 w-64 max-w-full" />

        <Skeleton className="mt-3 h-4 w-full max-w-[520px]" />
        <Skeleton className="mt-2 h-4 w-full max-w-[440px]" />
      </div>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="min-w-0 rounded-xl border bg-card p-5 sm:p-6"
          >
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div className="min-w-0 flex-1 space-y-2">
                <Skeleton className="h-4 w-28 max-w-full" />
                <Skeleton className="h-3 w-36 max-w-full" />
              </div>

              <Skeleton className="size-10 shrink-0 rounded-lg" />
            </div>

            <Skeleton className="mt-5 h-8 w-20 max-w-full" />
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section className="min-w-0 space-y-4">
        <Skeleton className="h-7 w-40 max-w-full" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="min-w-0 space-y-4 rounded-xl border bg-card p-5 sm:p-6"
            >
              <Skeleton className="size-10 shrink-0 rounded-lg" />

              <div className="min-w-0 space-y-2">
                <Skeleton className="h-5 w-36 max-w-full" />
                <Skeleton className="h-4 w-full max-w-[280px]" />
                <Skeleton className="h-4 w-3/4 max-w-full" />
              </div>

              <Skeleton className="h-9 w-full rounded-md" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardSkeleton;
