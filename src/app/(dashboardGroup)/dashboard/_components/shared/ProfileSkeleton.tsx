const ProfileSkeleton = () => {
  return (
    <section className="overflow-hidden rounded-2xl border bg-background shadow-sm animate-pulse">
      {/* Top */}
      <div className="flex flex-col items-center border-b p-8 text-center">
        <div className="size-24 rounded-full bg-muted" />

        <div className="mt-5 h-7 w-44 rounded bg-muted" />

        <div className="mt-2 h-4 w-56 rounded bg-muted" />
      </div>

      {/* Details */}
      <div className="grid gap-5 p-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="rounded-xl border p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="size-5 rounded bg-muted" />
              <div className="h-4 w-24 rounded bg-muted" />
            </div>

            <div className="h-5 w-40 rounded bg-muted" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-end border-t p-6">
        <div className="h-10 w-36 rounded-md bg-muted" />
      </div>
    </section>
  );
};

export default ProfileSkeleton;
