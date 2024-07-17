export const FilterCommunityBySportType = () => {
  const sportTypes = [
    "Sepak Bola",
    "Bulutangkis",
    "Bola Basket",
    "Voli",
    "Tenis Meja",
    "Tenis Lapangan",
    "Lari",
    "Renang",
    "Panjat tebing",
    "Futsal",
    "Bulu Tangkis",
    "Catur",
    "Bersepeda",
    "Angkat Besi",
    "Taekwondo",
    "Karate",
    "Panahan",
    "Golf",
    "Skateboarding",
    "Berselancar",
    "Menyelam",
    "Yoga",
    "Sepatu roda",
    "Aerobik",
    "Filates",
    "Gym",
    "Senam",
    "Memancing",
  ];
  return (
    <form className="w-full max-w-xs">
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Pilih Jenis Olahraga
        </option>
        <option key="">Semua</option>
        {sportTypes.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </form>
  );
};
