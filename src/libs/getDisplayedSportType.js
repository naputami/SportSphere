export const getDisplayedSportType = (sportType) => {
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
    { name: "Memancing", value: "memancing" },
  ];

  let result = "";

  for (let item of sportTypes) {
    if (item.value === sportType) {
      result = item.name;
      return result;
    }
  }

  return result;
};
