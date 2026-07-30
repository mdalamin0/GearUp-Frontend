import { Suspense } from "react";

import FeaturedGearList from "./FeaturedGearList";
import GearGridSkeleton from "../../gear/skeleton/GearGridSkeleton";

const FeaturedGear = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="max-w-2xl">
            <span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Featured Collection
            </span>

            <h2 className="heading">Featured Gear</h2>

            <p className="sub-heading mt-4">
              Discover our most popular sports and outdoor equipment for your
              next adventure.
            </p>
          </div>
        </div>

        <Suspense fallback={<GearGridSkeleton />}>
          <FeaturedGearList />
        </Suspense>
      </div>
    </section>
  );
};

export default FeaturedGear;
