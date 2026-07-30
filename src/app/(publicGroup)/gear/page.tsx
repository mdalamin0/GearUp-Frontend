import { Suspense } from "react";

import GearGridSkeleton from "../_components/gear/skeleton/GearGridSkeleton";
import GearList from "../_components/gear/GearList";
import GearToolbar from "../_components/gear/GearToolbar";
import { getCategories } from "../_actions/gear/getCategories";
import { getBrands } from "../_actions/gear/getBrands";

const GearPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <section className="section">
      <div className="container">
        <GearToolbar categories={categories} brands={brands} />

        <Suspense fallback={<GearGridSkeleton />}>
          <GearList searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
};

export default GearPage;
