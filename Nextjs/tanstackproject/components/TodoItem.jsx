
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useUpdateTodo } from "@/hooks/useUpdatetodo";
import { useDeleteTodo } from "@/hooks/useDeletetodos";

import { toast } from "sonner";

const TodoItem = ({ todo }) => {
  const { mutate: updateTodo, isPending: isUpdating } =
    useUpdateTodo();

  const { mutate: deleteTodo, isPending: isDeleting } =
    useDeleteTodo();

  const handleToggle = () => {
    updateTodo(
      {
        id: todo._id,
        updatedData: {
          completed: !todo.completed,
        },
      },
      {
        onSuccess: () => {
          toast.success(
            todo.completed
              ? "Todo marked as pending"
              : "Todo completed!"
          );
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  const handleDelete = () => {
    deleteTodo(
      { id: todo._id },
      {
        onSuccess: () => {
          toast.success("Todo deleted!");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center gap-3">
          <CardTitle>{todo.title}</CardTitle>

          <Badge variant={todo.completed ? "default" : "secondary"}>
            {todo.completed ? "Completed" : "Pending"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          {todo.description || "No description"}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
        <Button
  variant="outline"
  size="sm"
  onClick={() => setIsEditOpen(true)}
>
  Edit
</Button>

          <Button
            onClick={handleToggle}
            disabled={isUpdating}
            size="sm"
          >
            {isUpdating
              ? "Updating..."
              : todo.completed
                ? "Mark Pending"
                : "Complete"}
          </Button>

          <Button
            variant="destructive"
            size="sm"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
