import { useRef, forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      placeholder="Enter something"
    />
  );
});

function App() {

  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <CustomInput ref={inputRef} />

      <button onClick={handleFocus}>
        Focus Input
      </button>
    </>
  );
}

export default App;