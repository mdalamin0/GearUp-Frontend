"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PriceFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Price Range" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">Any Price</SelectItem>
        <SelectItem value="0-50">$0 - $50</SelectItem>
        <SelectItem value="50-100">$50 - $100</SelectItem>
        <SelectItem value="100-200">$100 - $200</SelectItem>
        <SelectItem value="200+">$200+</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PriceFilter;
