import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  // Actual counter
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? Number(savedCount) : 0;
  });

  // Input ki temporary value
  const [inputValue, setInputValue] = useState("");

  // Count change hone par localStorage mein save
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setCount(Number(inputValue));
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center gap-[10px]">
      <h1>Counter is {count}</h1>

      <h2>Counter value: {count}</h2>

      {/* Buttons */}
      <div className="flex gap-2">
        <button onClick={() => setCount((prev) => prev + 1)}>
          Add
        </button>

        <button
          onClick={() =>
            setCount((prev) => (prev > 0 ? prev - 1 : 0))
          }
        >
          Remove
        </button>

        <button
          className="rounded px-4 py-2 text-sm"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>

      {/* Input + Submit */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="number"
          placeholder="Enter value"
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}