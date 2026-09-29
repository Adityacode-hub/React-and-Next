import { useCountStore } from "../store/counterStore";

export default function Controls() {
  const {
    count,
    increaseCount,
    decreaseCount,
    reset,
  } = useCountStore();

  return (
    <div className="mt-6">
      <h2 className="mb-5 text-2xl font-bold">
        Count: {count}
      </h2>

      <div className="flex gap-3">
        <button
          onClick={increaseCount}
          className="rounded-lg bg-green-500 px-5 py-2 font-bold text-white hover:bg-green-600"
        >
          +
        </button>

        <button
          onClick={decreaseCount}
          className="rounded-lg bg-red-500 px-5 py-2 font-bold text-white hover:bg-red-600"
        >
          -
        </button>

        <button
          onClick={reset}
          className="rounded-lg bg-gray-700 px-5 py-2 font-bold text-white hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
}