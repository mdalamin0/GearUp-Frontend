import { getFeaturedGears } from "@/app/(publicGroup)/_actions/home/getFeaturedGears";
import GearCard from "../../gear/GearCard";
import { IGear } from "@/types/type";

const FeaturedGearList = async () => {
  const response = await getFeaturedGears();

  const gears = response?.data.data 

  if (!gears.length) {
    return (
      <div className="flex min-h-72 items-center justify-center rounded-3xl border border-dashed">
        <div className="text-center">
          <h3 className="text-xl font-semibold">No gear available</h3>

          <p className="mt-2 text-muted-foreground">Please check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" section grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {gears?.map((gear: IGear) => (
        <GearCard key={gear.id} gear={gear} />
      ))}
    </div>
  );
};

export default FeaturedGearList;
