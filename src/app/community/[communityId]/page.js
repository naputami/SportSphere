import Link from "next/link";

export default function Page({ params }) {
  const { communityId } = params;
  return (
    <main>
      <h2 className="text-3xl font-semibold p-3">Single Community Page</h2>
      <Link href={`/community/${communityId}/create`}>
        <button>Create Event</button>
      </Link>
    </main>
  );
}
