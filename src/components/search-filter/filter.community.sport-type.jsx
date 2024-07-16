export const FilterCommunityBySportType = () => {
  const sportTypes = [
    "Futsal",
    "Basket",
    "Sepeda",
    "Bulutangkis",
    "Lari",
    "Tenis meja",
    "Tenis lapangan",
    "Sepak bola",
  ];
  return (
    <form className="w-full max-w-xs">
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Pilih Jenis Olahraga
        </option>
        <option key="">Semua</option>
        {sportTypes.map((item, index) =>
          (
            <option key={index}>{item}</option>
          ) 
        )}
      </select>
    </form>
  );
};
