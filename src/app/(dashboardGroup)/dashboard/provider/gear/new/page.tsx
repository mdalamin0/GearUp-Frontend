import { getCategories } from "@/app/(publicGroup)/_actions/gear/getCategories";
import GearForm from "../../../_components/provider/GearForm";

const AddNewGearPage = async() => {
  const categories = await getCategories();
  return (
    <div className=" space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Add New Gear</h1>

        <p className="mt-2 text-muted-foreground">
          Publish a new gear item for customers to rent.
        </p>
      </div>

      <GearForm  categories={categories}/>
    </div>
  );
};

export default AddNewGearPage;
