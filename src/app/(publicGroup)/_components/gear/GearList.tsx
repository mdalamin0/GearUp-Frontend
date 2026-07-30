import { IGear } from "@/types/type";
import { getGears } from "../../_actions/gear/getGear";
import GearCard from "./GearCard";

const GearList = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;
  const gears = await getGears({query});

    if (!gears.data.data.length) {
      return (
        <div className="flex min-h-72 items-center justify-center rounded-3xl border border-dashed">
          <div className="text-center">
            <h3 className="text-xl font-semibold">No gear available</h3>

            <p className="mt-2 text-muted-foreground">
              Please check back later.
            </p>
          </div>
        </div>
      );
    }

  return (
    <div className=" section grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {gears?.data.data.map((gear: IGear) => (
        <GearCard key={gear.id} gear={gear} />
      ))}
    </div>
  );
};

export default GearList;
