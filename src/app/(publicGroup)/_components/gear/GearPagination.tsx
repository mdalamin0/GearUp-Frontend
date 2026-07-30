"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type GearPaginationProps = {
  currentPage: number;
  totalPages: number;
};


const GearPagination = ({ currentPage, totalPages }: GearPaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  

  const handlePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());

    const query = params.toString();

    router.replace(`${pathname}?${query}`, {
      scroll: false,
    });
  };

  const getVisiblePages = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    // First pages
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
      return pages;
    }

    // Last pages
    if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );

      return pages;
    }

    // Middle pages
    pages.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    );

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="my-14 flex justify-center">
      <Pagination>
        <PaginationContent>
          {visiblePages.map((page, index) => (
            <PaginationItem key={`${page}-${index}`}>
              {page === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={page === currentPage}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePage(page);
                  }}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default GearPagination;
