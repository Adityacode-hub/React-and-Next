
"use client";

import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import TodoForm from "@/components/TodoForm";

export default function DashboardHeader({
  search,
  setSearch,
  onMenuClick,
}) {
  return (
    <header className="mb-8 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
      {/* Heading */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={21} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Good morning! 👋
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Stay productive and get things done.
          </p>
        </div>
      </div>

      {/* Search and Add Task */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative min-w-0 flex-1 sm:w-64">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tasks..."
            className="border-white/10 bg-[#1C1933] pl-10 text-white placeholder:text-gray-500"
          />
        </div>

        <TodoForm />
      </div>
    </header>
  );
}
