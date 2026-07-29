import GearCardSkeleton from "./GearCardSkeleton";


const GearGridSkeleton = () => {
  return (
    <div className="container section grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <GearCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default GearGridSkeleton;
