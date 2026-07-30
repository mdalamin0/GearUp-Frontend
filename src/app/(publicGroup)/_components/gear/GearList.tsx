import { IGear } from "@/types/type";
import { getGears } from "../../_actions/gear/getGear";
import GearCard from "./GearCard";
import GearPagination from "./GearPagination";

const GearList = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;
  const gears = await getGears({query});
  const meta = gears.data.meta;
  const start = (meta.page - 1) * meta.limit + 1;
  const end = Math.min(meta.page * meta.limit, meta.total);

    if (!gears.data.data.length) {
      return (
        <div className="section">
          <div className="flex min-h-72 items-center justify-center rounded-3xl border border-dashed">
            <div className="text-center">
              <h3 className="text-xl font-semibold">No gear available</h3>

              <p className="mt-2 text-muted-foreground">
                Please check back later.
              </p>
            </div>
          </div>
        </div>
      );
    }

  return (
    <div className="section">
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {start}–{end}
          </span>{" "}
          of <span className="font-semibold text-foreground">{meta.total}</span>{" "}
          gears
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {gears.data.data.map((gear: IGear) => (
          <GearCard key={gear.id} gear={gear} />
        ))}
      </div>

      <GearPagination currentPage={meta.page} totalPages={meta.totalPages} />
    </div>
  );
};

export default GearList;
