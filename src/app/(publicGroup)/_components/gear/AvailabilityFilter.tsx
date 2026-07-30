"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const AvailabilityFilter = () => {
    const searchParams = useSearchParams();
      const router = useRouter();
      const pathname = usePathname();

      const currentAvailability = searchParams.get("available") || "all";

      const handleAvailability = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value === "all") {
          params.delete("available");
        } else {
          params.set("available", value);
        }

        params.delete("page");

        const query = params.toString();

        router.replace(query ? `${pathname}?${query}` : pathname, {
          scroll: false,
        });
      };
  return (
    <Select value={currentAvailability} onValueChange={handleAvailability}>
      <SelectTrigger className="w-full ">
        <SelectValue placeholder="Availability" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All</SelectItem>

        <SelectItem value="true">Available</SelectItem>

        <SelectItem value="false">Out of Stock</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default AvailabilityFilter;