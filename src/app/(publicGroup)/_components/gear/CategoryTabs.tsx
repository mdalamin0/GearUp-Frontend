"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type TCategory = {
  id: string;
  name: string;
};
type CategoryTabsProps = {
  categories: TCategory[];
};


const CategoryTabs = ({ categories }: CategoryTabsProps) => {
  const allCategories = [
    {
      id: "all",
      name: "All",
    },
    ...categories,
  ];
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentCategory = searchParams.get("category") || "All";

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    params.delete("page");

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center min-w-max gap-2 pb-1">
        {allCategories.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleCategory(category.name)}
            variant={currentCategory === category.name ? "default" : "outline"}
            className="rounded-full px-5"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
