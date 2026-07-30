"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const priceMap = {
  all: {
    minPrice: "",
    maxPrice: "",
  },

  under20: {
    minPrice: "",
    maxPrice: "20",
  },

  "20-50": {
    minPrice: "20",
    maxPrice: "50",
  },

  "50-100": {
    minPrice: "50",
    maxPrice: "100",
  },

  above100: {
    minPrice: "100",
    maxPrice: "",
  },
} as const;

const PriceFilter = () => {
   const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const currentPrice = (() => {
      const min = searchParams.get("minPrice");
      const max = searchParams.get("maxPrice");

      if (!min && !max) return "all";
      if (!min && max === "20") return "under20";
      if (min === "20" && max === "50") return "20-50";
      if (min === "50" && max === "100") return "50-100";
      if (min === "100" && !max) return "above100";

      return "all";
    })();

    const handlePrice = (value: keyof typeof priceMap) => {
      const params = new URLSearchParams(searchParams.toString());

      const price = priceMap[value];

      if (price.minPrice) {
        params.set("minPrice", price.minPrice);
      } else {
        params.delete("minPrice");
      }

      if (price.maxPrice) {
        params.set("maxPrice", price.maxPrice);
      } else {
        params.delete("maxPrice");
      }

      params.delete("page");

      const query = params.toString();

      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    };
  return (
    <Select value={currentPrice} onValueChange={handlePrice}>
      <SelectTrigger className="w-full ">
        <SelectValue placeholder="Price" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All Prices</SelectItem>

        <SelectItem value="under20">Under $20</SelectItem>

        <SelectItem value="20-50">$20 - $50</SelectItem>

        <SelectItem value="50-100">$50 - $100</SelectItem>

        <SelectItem value="above100">Above $100</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PriceFilter;
