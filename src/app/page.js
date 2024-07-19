import { FilterCommunityBySportType } from "@/components/search-filter/filter.community.sport-type";
import { SearchCommunityByCity } from "@/components/search-filter/search.community.city";
import { CommunityCard } from "@/components/cards/card.community";
import { PageTemplate } from "@/components/page-template";
import { getAllPublicCommunities } from "@/services/community.service";

export default async function Home({ searchParams }) {
  const { sportType, city } = searchParams;
  const communities = await getAllPublicCommunities(sportType, city);

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
          {communities.map((item) => (
            <CommunityCard
              name={item.name}
              city={item.city}
              sportType={item.sport_type}
              isPrivate={item.is_private}
              key={item.community_id}
              imageTitle={item.community_image_profile}
              communityId={item.community_id}
            />
          ))}
        </section>
      </main>
    </PageTemplate>
  );
}
