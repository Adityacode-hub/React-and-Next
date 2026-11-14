import { Suspense } from "react";
import * as AuthGuard from "@/lib/auth-guard";

export const metadata = {
  title: "Login",
  description: "Welcome to Login",
};

async function AuthContent({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Available exports:", Object.keys(AuthGuard));

  await AuthGuard.requireUnAuth();

  return <>{children}</>;
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AuthContent>{children}</AuthContent>
    </Suspense>
  );
}