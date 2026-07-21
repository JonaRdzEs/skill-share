"use client";

import { redirect, usePathname, useSearchParams } from "next/navigation";
import { Link } from "./Link";
import { ChevronLeft, ChevronRight } from "./icons";
import { generatePaginationNumbers } from "@/src/utils";

interface Props {
  totalPages: number;
}

export function Pagination({ totalPages }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;

  if (isNaN(currentPage) || currentPage <= 0 || currentPage > totalPages) {
    redirect(pathname);
  }

  const pages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string): string => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (Number(pageNumber) <= 0) {
      return pathname;
    }

    if (Number(pageNumber) > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const isFirstPage = () => currentPage <= 1;
  const isLastPage = () => currentPage === totalPages;

  if (totalPages === 1) return;

  return (
    <nav
      aria-label="Teacher list navigation"
      className="my-7 flex justify-center items-center"
    >
      <ul className="flex justify-center items-center flex-wrap gap-1 w-full max-w-xl sm:gap-3">
        <li>
          <Link
            variant="unstyled"
            href={createPageUrl(currentPage - 1)}
            tabIndex={-1}
            aria-disabled={isFirstPage()}
            onClick={(e) => {
              if (isFirstPage()) e.preventDefault();
            }}
            className={`w-10 h-10 flex justify-center items-center rounded-md text-primary-txt shadow-sm  lg:w-12 lg:h-12 ${
              isFirstPage()
                ? "bg-gray-100 cursor-default text-secondary-txt"
                : "hover:bg-primary/10"
            }`}
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </Link>
        </li>
        {pages.map((page, index) => (
          <li
            key={`${page}-${index}`}
            className={`text-xs sm:text-base xl:text-lg`}
          >
            <Link
              variant="unstyled"
              href={createPageUrl(page)}
              className={`w-10 h-10 flex justify-center items-center rounded-md shadow-sm lg:w-12 lg:h-12 text-primary-txt ${
                currentPage === page ? "bg-primary/25" : "hover:bg-primary/10"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          <Link
            variant="unstyled"
            href={createPageUrl(currentPage + 1)}
            onClick={(e) => {
              if (isLastPage()) e.preventDefault();
            }}
            aria-disabled={isLastPage()}
            className={`w-10 h-10 flex justify-center items-center rounded-md text-primary-txt shadow-sm bg-pure-white lg:w-12 lg:h-12 ${
              isLastPage()
                ? "bg-gray-100 cursor-default text-secondary-txt"
                : "hover:bg-primary/10"
            }`}
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
