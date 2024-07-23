"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const SearchCommunityByCity = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleKeywordChange = useDebouncedCallback((keyword) => {
    const params = new URLSearchParams(searchParams);
    if (keyword) {
      params.set("city", keyword);
    } else {
      params.delete("city");
    }

    push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
      <input
        name="city"
        type="text"
        className="grow"
        placeholder="Cari komunitas berdasarkan kota"
        onChange={(e) => handleKeywordChange(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};
