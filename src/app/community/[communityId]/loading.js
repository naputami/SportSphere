import { PageTemplate } from "@/components/template/page-template";
import Link from "next/link";

export default function Loading() {
  return (
    <PageTemplate>
      <main className="mt-6 container mx-auto px-6 md:px-16">
        <Link className="btn btn-ghost" href="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2592 14L10.6242 24.635M10.6242 24.635L23.2592 35.27M10.6242 24.635H38"
              stroke="#2B293D"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
          Back to homepage
        </Link>
        <div className="mt-8 text-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </main>
    </PageTemplate>
  );
}
