import { PageTemplate } from "@/components/template/page-template";
import { serverAuth } from "@/libs/serverAuth";
import { redirect } from "next/navigation";
import { getMyCommunityByUserId } from "@/services/community.service";
import { MyCommunity } from "./(component)/my-community";
export default async function Page() {
  const { id } = serverAuth();

  if(!id){
    redirect("/login")
  }

  const communities = await getMyCommunityByUserId(id);

  return (
    <PageTemplate>
      <main className="mt-6 container mx-auto px-6 md:px-16">
        <MyCommunity userId={id} data={communities} />
      </main>
    </PageTemplate>
  );
}
