"use client";

import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {  useRef, useState } from "react";

type SearchInputProps = {
  placeholder?: string;
};

const SearchInput = ({ placeholder = "Search..." }: SearchInputProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("searchTerm") ?? "",
  );

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);



  const handleChange = (value: string) => {
    setSearchValue(value);
    const params = new URLSearchParams(searchParams.toString());

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      if (value.trim()) {
        params.set("searchTerm", value.trim());
      } else {
        params.delete("searchTerm");
      }
      params.delete("page");

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    }, 500);
  };

 

const handleClear = () => {
  // Clear input immediately
  setSearchValue("");

  // Cancel pending debounce
  if (debounceRef.current) {
    clearTimeout(debounceRef.current);
  }

  // Remove search query
  const params = new URLSearchParams(searchParams.toString());

  params.delete("searchTerm");
  params.delete("page");

  const query = params.toString();

  router.replace(query ? `${pathname}?${query}` : pathname, {
    scroll: false,
  });
};

  return (
    <div className="relative w-full max-w-md">
      {/* Search Icon */}
      <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

      {/* Input */}
      <Input
        onChange={(e) => handleChange(e.target.value)}
        value={searchValue}
        placeholder={placeholder}
        className="h-11 pl-10 pr-10"
      />

      {/* Clear Button */}
      {searchValue && (
        <Button
          onClick={handleClear}
          type="button"
          variant="ghost"
          size="icon"
          className="absolute top-1.5 right-1 size-8 "
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  );
};

export default SearchInput;
