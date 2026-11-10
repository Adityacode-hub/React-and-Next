
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateTodo } from "@/hooks/useCreateTodo";
import { toast } from "sonner";

const TodoForm = () => {
  const { mutate, isPending } = useCreateTodo();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const todo = {
      title: formData.get("title"),
      description: formData.get("description"),
    };

    mutate(todo, {
      onSuccess: () => {
        toast.success("Todo created successfully!");
        form.reset();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to create todo");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="title"
        placeholder="Todo title"
        required
      />

      <Textarea
        name="description"
        placeholder="Description"
      />

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Add Todo"}
      </Button>
    </form>
  );
};

export default TodoForm;
