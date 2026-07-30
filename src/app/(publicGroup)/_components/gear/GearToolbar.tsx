import SearchInput from "@/components/shared/SearchInput";
// import SortDropdown from "./SortDropdown";

const GearToolbar = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="heading">Browse Gear</h1>

        <p className="sub-heading mt-3 ">
          Discover premium outdoor and sports equipment from trusted providers.
          Search, filter, and rent with confidence.
        </p>
      </div>

      <div className="py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* <SearchInput /> */}
        <SearchInput />

        {/* <SortDropdown /> */}
      </div>
    </div>
  );
};

export default GearToolbar;
