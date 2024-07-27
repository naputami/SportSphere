"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { sportTypes } from "@/libs/getDisplayedSportType";

export const FilterCommunityBySportType = () => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleFilterChange = (event) => {
    const params = new URLSearchParams(searchParams);
    const sportTypeValue = event.target.value;
      if (sportTypeValue) {
        params.set('sportType', sportTypeValue);
      } else {
        params.delete('sportType');
      }

      push(`${pathname}?${params.toString()}`);
    }


  return (
    <form className="w-full max-w-xs">
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={handleFilterChange}
      >
        <option disabled selected>
          Choose Sport Type
        </option>
        <option value="">Semua</option>
        {sportTypes.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};
