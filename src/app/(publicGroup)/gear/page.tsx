import { Suspense } from "react";

import GearGridSkeleton from "../_components/gear/GearGridSkeleton";
import GearList from "../_components/gear/GearList";
import GearToolbar from "../_components/gear/GearToolbar";

const GearPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <section className="section">
      <div className="container">
        <GearToolbar />

        <Suspense fallback={<GearGridSkeleton />}>
          <GearList searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
};

export default GearPage;
