
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock3,
  ListTodo,
} from "lucide-react";

import { useTodos } from "@/hooks/useTodos";

export default function StatsCards() {
  const { data, isLoading } = useTodos();

  const todos = data?.todos ?? [];

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const pending = todos.filter(
    (todo) => !todo.completed
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: todos.length,
      icon: ListTodo,
      color: "var(--accent)",
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
      color: "#10B981",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      color: "#F59E0B",
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.title}
            className="border-white/10 bg-[#1C1933] text-white"
          >
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-gray-400">
                  {stat.title}
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {isLoading ? "..." : stat.value}
                </p>
              </div>

              <div
                className="rounded-xl p-3"
                style={{
                  backgroundColor: `${stat.color}25`,
                  color: stat.color,
                }}
              >
                <Icon size={25} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
