"use client";

import { updateStatus } from "@/actions/contact";

export function StatusButton({ id }) {
  const action = updateStatus.bind(null, id);

  return (
    <form action={action}>
      <button
        type="submit"
        className="rounded-lg bg-green-500 px-3 py-2 text-white hover:bg-green-600"
      >
        Mark Resolved
      </button>
    </form>
  );
}