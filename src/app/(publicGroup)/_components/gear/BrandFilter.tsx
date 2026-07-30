"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BrandFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Brand" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All Brands</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default BrandFilter;
