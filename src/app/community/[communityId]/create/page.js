import { Footer } from "@/components/footer";
import { FormEvent } from "@/components/formEvent";
import { serverAuth } from "@/libs/serverAuth";
import { redirect } from "next/navigation";

export default function Page({ params }) {
  const {id} = serverAuth();
  if(!id){
    redirect("/login")
  }
  return (
    <main>
      <FormEvent communityId={params.communityId} userId={id} />
      <Footer />
    </main>
  );
}
