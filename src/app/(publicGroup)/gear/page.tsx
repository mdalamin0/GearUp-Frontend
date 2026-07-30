import { Suspense } from "react";

import GearGridSkeleton from "../_components/gear/GearGridSkeleton";
import GearList from "../_components/gear/GearList";
import GearToolbar from "../_components/gear/GearToolbar";
import { getCategories } from "../_actions/gear/getCategories";

const GearPage = async({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
   const categories = await getCategories();

  return (
    <section className="section">
      <div className="container">
        <GearToolbar categories={categories} />

        <Suspense fallback={<GearGridSkeleton />}>
          <GearList searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
};

export default GearPage;
