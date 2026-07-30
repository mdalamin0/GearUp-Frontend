"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";


const sortMap = {
  newest: {
    sortBy: "createdAt",
    sortOrder: "desc",
  },
  "price-asc": {
    sortBy: "rentalPrice",
    sortOrder: "asc",
  },
  "price-desc": {
    sortBy: "rentalPrice",
    sortOrder: "desc",
  },
} as const;

const SortDropdown = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentSort =
    searchParams.get("sortBy") === "rentalPrice"
      ? searchParams.get("sortOrder") === "asc"
        ? "price-asc"
        : "price-desc"
      : "newest";

  const handleSort = (value: keyof typeof sortMap) => {
    const params = new URLSearchParams(searchParams.toString());

    const sort = sortMap[value];

    params.set("sortBy", sort.sortBy);
    params.set("sortOrder", sort.sortOrder);

    params.delete("page");

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };


  return (
    <Select value={currentSort} onValueChange={handleSort}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="newest">Newest</SelectItem>

        <SelectItem value="price-asc">Price: Low to High</SelectItem>

        <SelectItem value="price-desc">Price: High to Low</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortDropdown;
