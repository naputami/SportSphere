import { BackButton } from "@/components/back-button";
import { PageTemplate } from "@/components/template/page-template";
export const LoadingTemplate = () => {
  return (
    <PageTemplate>
      <main className="mt-6 container mx-auto px-6 md:px-16">
        <BackButton />
        <div className="mt-8 text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </main>
    </PageTemplate>
  );
};
