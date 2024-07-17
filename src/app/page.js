import { Navbar } from "@/components/navbar";
import { FilterCommunityBySportType } from "@/components/search-filter/filter.community.sport-type";
import { SearchCommunityByCity } from "@/components/search-filter/search.community.city";
import { CommunityCard } from "@/components/cards/card.community";
import { PageTemplate } from "@/components/page-template";

const userDummy = {
  id: 1,
  name: "Nadia",
};

const communityDummy = [
  {
    communityId: 1,
    name: "Jakarta Fun Bicycle",
    city: "Jakarta",
    sportType: "Sepeda",
    isPrivate: false
  },
  {
    communityId: 2,
    name: "Badminton Asyik",
    city: "Bandung",
    sportType: "Bulu tangkis",
    isPrivate: true,
  },
  {
    communityId: 3,
    name: "Basket Keren",
    city: "Semarang",
    sportType: "Basket",
    isPrivate: false
  },
  {
    communityId: 4,
    name: "Voli Ceria dan Bermanfaat",
    city: "Surabaya",
    sportType: "Voli",
    isPrivate: true,
  },
  {
    communityId: 5,
    name: "Gym Gokil Mantap",
    city: "Balikpapan",
    sportType: "Gym",
    isPrivate: false
  }

]

export default function Home() {
  return (
    <PageTemplate>
      <main className="mt-6 container mx-auto p-4 md:p-6">
        <section className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-4">
          <FilterCommunityBySportType />
          <SearchCommunityByCity />
        </section>
        <h2 className="text-xl lg:text-2xl font-bold mt-10">
          Temukan Komunitas Yang Sesuai Dengan Dirimu
        </h2>
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {communityDummy.map(item => <CommunityCard name={item.name} city={item.city} sportType={item.sportType} isPrivate={item.isPrivate} key={item.communityId} />)}
        </section>
      </main>
    </PageTemplate>
  );
}
