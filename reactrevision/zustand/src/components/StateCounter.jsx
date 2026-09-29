import { useCountStore } from "../store/counterStore";

export default function StateCounter() {
  const count = useCountStore((state) => state.count);

  return (
    <h1 className="text-4xl font-bold text-gray-800">
      {count} bears around here...
    </h1>
  );
}