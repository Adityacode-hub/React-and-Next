
"use client";

import { useTodos } from "@/hooks/useTodos";
import TodoItem from "@/components/TodoItem";
import { Button } from "@/components/ui/button";

const TodoList = () => {
  const { data, isLoading, isError, error, refetch } = useTodos();

  if (isLoading) {
    return (
      <div className="text-center py-10">
        Loading todos...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-10 space-y-3">
        <p className="text-red-500">
          {error.message || "Failed to fetch todos"}
        </p>

        <Button onClick={() => refetch()} variant="outline">
          Try Again
        </Button>
      </div>
    );
  }

  const todos = data?.todos ?? [];

  if (todos.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-lg font-semibold">
          No todos found
        </h2>
        <p className="text-sm text-muted-foreground">
          Create your first todo!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        My Todos ({todos.length})
      </h2>

      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
