"use client";

import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

type SearchInputProps = {
  placeholder?: string;
};

const SearchInput = ({ placeholder = "Search..." }: SearchInputProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState("");

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (value: string) => {
    setValue(value)
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
    }, 400);
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Search Icon */}
      <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

      {/* Input */}
      <Input
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={
          searchParams.get("searchTerm")
            ? searchParams.get("searchTerm")?.toString()
            : ""
        }
        placeholder={placeholder}
        className="h-11 pl-10 pr-10"
      />

      {/* Clear Button */}
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute top-1/2 right-1 size-8 -translate-y-1/2"
        >
          <X className="size-4" />
        </Button>
      )}
    </div>
  );
};

export default SearchInput;
