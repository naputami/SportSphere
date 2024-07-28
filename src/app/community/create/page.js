import { Footer } from "@/components/footer";
import { FormCommunity } from "@/components/formCommunity";
import { serverAuth } from "@/libs/serverAuth";
import { redirect } from "next/navigation";

export default function Page({ }) {
  const user = serverAuth();
  if(!user){
    redirect("/login")
  }
  const { id } = user;
  return (
    <main>
      <FormCommunity userId={id} />
      <Footer />
    </main>
  );
}