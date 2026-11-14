import { Suspense } from "react";
import { requireAuth } from "@/lib/auth-guard";
import { LogoutButton } from "@/components/logout-button";

async function HomeContent() {
  const session = await requireAuth();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-zinc-900 text-white gap-5">
      <h1>Welcome, {session.user.name}</h1>
      <p>{session.user.email}</p>

      <h2>Protected Content</h2>

      <LogoutButton />
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