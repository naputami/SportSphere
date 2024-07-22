"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const FilterCommunityBySportType = () => {
  const sportTypes = [
    { name: "Sepak Bola", value: "sepakbola" },
    { name: "Bulutangkis", value: "bulutangkis" },
    { name: "Bola Basket", value: "bolabasket" },
    { name: "Voli", value: "voli" },
    { name: "Tenis Meja", value: "tenismeja" },
    { name: "Tenis Lapangan", value: "tenislapangan" },
    { name: "Lari", value: "lari" },
    { name: "Renang", value: "renang" },
    { name: "Panjat tebing", value: "panjattebing" },
    { name: "Futsal", value: "futsal" },
    { name: "Bulu Tangkis", value: "bulutangkis" },
    { name: "Catur", value: "catur" },
    { name: "Bersepeda", value: "bersepeda" },
    { name: "Angkat Besi", value: "angkatbesi" },
    { name: "Taekwondo", value: "taekwondo" },
    { name: "Karate", value: "karate" },
    { name: "Panahan", value: "panahan" },
    { name: "Golf", value: "golf" },
    { name: "Skateboarding", value: "skateboarding" },
    { name: "Berselancar", value: "berselancar" },
    { name: "Menyelam", value: "menyelam" },
    { name: "Yoga", value: "yoga" },
    { name: "Sepatu roda", value: "sepaturoda" },
    { name: "Aerobik", value: "aerobik" },
    { name: "Filates", value: "filates" },
    { name: "Gym", value: "gym" },
    { name: "Senam", value: "senam" },
    { name: "Memancing", value: "memancing" }
  ];

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
          Pilih Jenis Olahraga
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
