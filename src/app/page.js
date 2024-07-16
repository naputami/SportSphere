import { Navbar } from "@/components/navbar";
import { FilterCommunityBySportType } from "@/components/search-filter/filter.community.sport-type";
import { SearchCommunityByCity } from "@/components/search-filter/search.community.city";
import { CommunityCard } from "@/components/cards/card.community";

const userDummy = {
  id: 1,
  name: "Nadia",
};

export default function Home() {
  return (
    <>
      <header>
        <Navbar user={userDummy} />
      </header>
      <main className="mt-6 container mx-auto p-4 md:p-6">
        <section className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-4">
          <FilterCommunityBySportType />
          <SearchCommunityByCity />
        </section>
        <h2 className="text-xl lg:text-2xl font-bold mt-10">
          Temukan Komunitas Yang Sesuai Dengan Dirimu
        </h2>
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </section>
      </main>
    </>
  );
}
