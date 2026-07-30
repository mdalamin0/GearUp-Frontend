"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type BrandFilterProps = {
  brands: string[];
};

const BrandFilter = ({ brands }: BrandFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentBrand = searchParams.get("brand") || "all";
  const handleBrand = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete("brand");
    } else {
      params.set("brand", value);
    }
    params.delete("page")
    const query = params.toString()
    router.replace(query ?  `${pathname}?${query}` : pathname, {
      scroll: false
    })
  };
  return (
    <Select value={currentBrand} onValueChange={handleBrand}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Brand" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All Brands</SelectItem>
        {brands.map((brand) => (
          <SelectItem key={brand} value={brand}>
            {brand}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default BrandFilter;
