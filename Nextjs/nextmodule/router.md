
In React, useRouter is used to programmatically navigate between pages and control navigation.

In Next.js App Router, it comes from next/navigation.
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/about")}>
      Go to About
    </button>
  );
}


1. Why do we use useRouter?
Suppose you're building a login page.

After successful login, you want to redirect the user to the dashboard.
const router = useRouter();

const handleLogin = async () => {
  // Login API logic

  router.push("/dashboard");
};


You don't need the user to manually click a link. You can navigate through your JavaScript logic.
2. Important methods of useRouter
Method	Purpose
router.push("/about")	Navigate to a page
router.replace("/login")	Navigate without keeping the current page in history
router.back()	Go to previous page
router.forward()	Go to next page
router.refresh()	Refresh current route data
router.prefetch("/about")	Preload a route

3. Difference between Link and useRouter
This is important!

Using Link:
import Link from "next/link";

<Link href="/about">About</Link>


Use this when the user clicks a link to navigate.

Using useRouter:
const router = useRouter();

<button onClick={() => router.push("/about")}>
  About
</button>