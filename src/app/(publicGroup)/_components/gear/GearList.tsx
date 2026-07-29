import { IGear } from "@/types/type";
import { getGears } from "../../_actions/gear/getGear";
import GearCard from "./GearCard";


const GearList = async() => {
  const gears =await getGears();

  return (
    <div className="container section grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {gears?.data.data.map((gear: IGear) => (
        <GearCard key={gear.id} gear={gear} />
      ))}
    </div>
  );
};

export default GearList;
