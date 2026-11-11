
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl space-y-8 p-6">
      <h1 className="text-3xl font-bold">
        My Todo App
      </h1>

      <TodoForm />

      <TodoList />
    </main>
  );
}
