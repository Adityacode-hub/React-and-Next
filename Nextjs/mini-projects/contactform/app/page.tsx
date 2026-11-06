
import { Suspense } from "react";
import { connection } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";

async function UsersList() {
  await connection();
  await connectDB();

  const users = await User.find();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Dashboard
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Registered Users
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Manage and view all your registered users.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
            <p className="text-xs font-medium text-slate-500">
              Total Users
            </p>
            <p className="text-2xl font-bold text-slate-900">
              {users.length}
            </p>
          </div>
        </div>

        {/* Users */}
        {users.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
              👥
            </div>
            <h2 className="text-lg font-semibold text-slate-800">
              No users yet
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Registered users will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* Table Header */}
            <div className="hidden grid-cols-12 gap-4 border-b border-slate-200 bg-slate-100 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 md:grid">
              <div className="col-span-4">User</div>
              <div className="col-span-3">Email</div>
              <div className="col-span-2">Mobile</div>
              <div className="col-span-3">Address</div>
            </div>

            {/* User Rows */}
            <div className="divide-y divide-slate-100">
              {users.map((user) => (
                <div
                  key={user._id.toString()}
                  className="grid grid-cols-1 gap-4 px-6 py-5 transition hover:bg-slate-50 md:grid-cols-12 md:items-center md:gap-4"
                >
                  {/* User */}
                  <div className="flex items-center gap-3 md:col-span-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                    <div className="min-w-0">
                      <h2 className="truncate font-semibold text-slate-900">
                        {user.name}
                      </h2>
                      <p className="text-xs text-slate-500">Registered user</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="min-w-0 md:col-span-3">
                    <p className="mb-1 text-xs font-medium text-slate-400 md:hidden">
                      EMAIL
                    </p>
                    <p className="break-all text-sm text-slate-600">
                      {user.email}
                    </p>
                  </div>

                  {/* Mobile */}
                  <div className="md:col-span-2">
                    <p className="mb-1 text-xs font-medium text-slate-400 md:hidden">
                      MOBILE
                    </p>
                    <p className="text-sm text-slate-600">
                      {user.mobile}
                    </p>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-3">
                    <p className="mb-1 text-xs font-medium text-slate-400 md:hidden">
                      ADDRESS
                    </p>
                    <p className="text-sm text-slate-600">
                      {user.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-slate-400">
          User Management Dashboard
        </p>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-50">
          <p className="animate-pulse text-sm font-medium text-slate-500">
            Loading users...
          </p>
        </main>
      }
    >
      <UsersList />
    </Suspense>
  );
}
