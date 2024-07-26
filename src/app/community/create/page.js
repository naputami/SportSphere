import { Footer } from "@/components/footer";
import { FormCommunity } from "@/components/formCommunity";
import { serverAuth } from "@/libs/serverAuth";

export default function Page({ }) {
  const { id } = serverAuth();
  return (
    <main>
      <FormCommunity userId={id} />
      <Footer />
    </main>
  );
}