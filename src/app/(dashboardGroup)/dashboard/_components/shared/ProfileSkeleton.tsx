import { Skeleton } from "@/components/ui/skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-8">
      {/* Profile Header */}
      <div className="min-w-0">
        <Skeleton className="h-9 w-48 max-w-full" />
        <Skeleton className="mt-3 h-4 w-full max-w-[360px]" />
      </div>

      {/* Profile Card */}
      <section className="w-full min-w-0 overflow-hidden rounded-2xl border bg-background shadow-sm">
        {/* Top */}
        <div className="flex min-w-0 flex-col items-center border-b p-5 text-center sm:p-8">
          <Skeleton className="size-24 shrink-0 rounded-full" />

          <Skeleton className="mt-5 h-7 w-44 max-w-full" />

          <Skeleton className="mt-2 h-4 w-full max-w-[224px]" />
        </div>

        {/* Details */}
        <div className="grid min-w-0 grid-cols-1 gap-4 p-4 sm:gap-5 sm:p-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="min-w-0 space-y-3 rounded-xl border p-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Skeleton className="size-5 shrink-0 rounded" />
                <Skeleton className="h-4 w-28 max-w-full" />
              </div>

              <Skeleton className="h-5 w-40 max-w-full" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t p-4 sm:p-6">
          <Skeleton className="h-10 w-44 max-w-full rounded-md" />
        </div>
      </section>
    </div>
  );
};

export default ProfileSkeleton;
