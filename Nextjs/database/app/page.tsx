import { Suspense } from "react";
import { requireAuth } from "@/lib/auth-guard";

async function HomeContent() {
  const session = await requireAuth();
  const { user } = session;

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900 text-white">
      <h1>Welcome, {user.name}</h1>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomeContent />
    </Suspense>
  );
}