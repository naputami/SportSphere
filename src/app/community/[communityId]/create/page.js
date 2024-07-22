import { Footer } from "@/components/footer";
import { FormEvent } from "@/components/formEvent";

export default function Page({ params }) {
  return (
    <main>
      <FormEvent communityId={params.communityId} />
      <Footer />
    </main>
  );
}
