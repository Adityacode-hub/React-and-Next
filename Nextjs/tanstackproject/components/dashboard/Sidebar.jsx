
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

import { useCreateTodo } from "@/hooks/useCreateTodo";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TodoForm() {
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useCreateTodo();

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const todo = {
      title: formData.get("title"),
      description: formData.get("description"),
    };

    mutate(todo, {
      onSuccess: () => {
        toast.success("Task created successfully!");
        form.reset();
        setOpen(false);
      },

      onError: (error) => {
        toast.error(error.message || "Could not create task");
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="gap-2 border-0 text-white"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <Plus size={18} />
          Add Task
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Create a new task</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-3">
          <Input
            name="title"
            placeholder="What needs to be done?"
            required
            maxLength={120}
          />

          <Textarea
            name="description"
            placeholder="Add a description..."
            rows={4}
          />

          <Button
            type="submit"
            disabled={isPending}
            className="w-full text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {isPending ? "Creating..." : "Create Task"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
