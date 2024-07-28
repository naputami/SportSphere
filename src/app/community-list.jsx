import { getAllPublicCommunities } from "@/services/community.service";
import { CommunityCard } from "@/components/cards/card.community";

export default async function CommunityList({ sportType, city }) {
  const communities = await getAllPublicCommunities(sportType, city);
  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {communities.length == 0 && (
        <h2 className="font-bold text-xl">Komunitas tidak ditemukan</h2>
      )}
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
  );
}
