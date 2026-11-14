
import { Suspense } from "react";
import { requireAuth } from "@/lib/auth-guard";
import { LogoutButton } from "@/components/logout-button";

async function DashboardContent() {
  const session = await requireAuth();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1>Welcome, {session.user.name}</h1>
      <p>{session.user.email}</p>

      <h2>Protected Content</h2>
      <p>Only logged-in users can see this.</p>

      <LogoutButton />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <DashboardContent />
    </Suspense>
  );
}
