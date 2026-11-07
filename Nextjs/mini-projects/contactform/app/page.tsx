import { Suspense } from "react";
import { connection } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import { StatusButton } from "@/components/status-button";

async function UsersList() {
  await connection();
  await connectDB();

  const users = await User.find().lean();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Registered Users
        </h1>

        {users.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user._id.toString()}
                className="grid grid-cols-1 gap-6 rounded-xl bg-white p-6 shadow-sm md:grid-cols-5"
              >
                <div>
                  <p className="text-sm text-gray-500">NAME</p>
                  <p className="font-semibold text-gray-900">
                    {user.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">EMAIL</p>
                  <p className="font-semibold text-gray-900">
                    {user.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">MOBILE</p>
                  <p className="font-semibold text-gray-900">
                    {user.mobile}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">ADDRESS</p>
                  <p className="font-semibold text-gray-900">
                    {user.address}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-sm text-gray-500">STATUS</p>

                  {user.status === "resolved" ? (
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      Resolved
                    </span>
                  ) : (
                    <StatusButton id={user._id.toString()} />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center">
          Loading users...
        </div>
      }
    >
      <UsersList />
    </Suspense>
  );
}