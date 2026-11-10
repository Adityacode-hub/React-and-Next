
"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCards";
import { ThemeProvider } from "./ThemeProvider";

import TodoList from "@/components/TodoList";

function DashboardContent() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0B1A]">
      <div className="flex min-h-screen">

        <Sidebar
          filter={filter}
          setFilter={setFilter}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">

            <DashboardHeader
              search={search}
              setSearch={setSearch}
              onMenuClick={() => setSidebarOpen(true)}
            />

            <StatsCards />

            <TodoList
              filter={filter}
              search={search}
            />

          </div>
        </main>

      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
}
