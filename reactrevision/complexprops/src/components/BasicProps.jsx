import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg font-small transition-all duration-300
        ${size === "small" ? "text-sm px-4 py-1" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
        ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
        ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
        ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div>
      <h2 className="text-2xl font-semibold">
        Learn React Props
      </h2>

      <p className="mt-3 text-gray-400">
        Select a topic from the navigation menu above to explore
        different React prop patterns.
      </p>

      <div className="space-y-4">

        <h3>
          Different colors: {clickCount}
        </h3>

        <div className="flex flex-wrap gap-3">

          <Button
            text="Primary button"
            color="primary"
            
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary button"
            color="secondary"
            size="large"
            disabled={true}
            onClick={() => setClickCount(clickCount + 1)}
          />
<Button
            text="Success button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>

      </div>
    </div>
  );
}

export default BasicProps;