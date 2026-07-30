import { Suspense } from "react";

import GearGridSkeleton from "../_components/gear/GearGridSkeleton";
import GearList from "../_components/gear/GearList";
import GearToolbar from "../_components/gear/GearToolbar";

const GearPage = () => {
  return (
    <section className="section">
      <div className="container">
        <GearToolbar />

        <Suspense fallback={<GearGridSkeleton />}>
          <GearList />
        </Suspense>
      </div>
    </section>
  );
};

export default GearPage;
