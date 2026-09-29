import { SquigglyText } from "@/components/ui/squiggly-text";

function App() {
  return (
    <div>
      <h1>
        How many{" "}
        <SquigglyText
          stepDuration={70}
          scale={[6, 9]}
          className="text-amber-500"
        >
          drinks
        </SquigglyText>{" "}
        are too many drinks?
      </h1>
    </div>
  );
}

export default App;