import React, { Suspense } from 'react';
import GearGridSkeleton from '../_components/gear/GearGridSkeleton';
import GearList from '../_components/gear/GearList';

const GearPage = () => {
  return (
    <div>
      <Suspense fallback={<GearGridSkeleton />}>
        <GearList />
      </Suspense>
    </div>
  );
};

export default GearPage;