import { FilterCommunityBySportType } from "@/components/search-filter/filter.community.sport-type";
import { SearchCommunityByCity } from "@/components/search-filter/search.community.city";
import { PageTemplate } from "@/components/template/page-template";
import { Suspense } from "react";
import CommunityList from "./community-list";
import { SkeletonCommunityList } from "@/components/skeleton/skeleton.community-list";

export default async function Home({ searchParams }) {
  const { sportType, city } = searchParams;

  return (
    <PageTemplate>
      <main className="mt-6 container mx-auto px-4 md:px-16">
        <section className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-4">
          <FilterCommunityBySportType />
          <SearchCommunityByCity />
        </section>
        <h2 className="text-xl lg:text-2xl font-bold mt-10">
          Discover your favorite sports communities here
        </h2>
        <Suspense fallback={<SkeletonCommunityList />}>
          <CommunityList city={city} sportType={sportType} />
        </Suspense>
      </main>
    </PageTemplate>
  );
}
