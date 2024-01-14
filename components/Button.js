"use client";

function MyButton({ reset, increase, decrease }) {
  return (
    <div className="btnContainer">
      <button onClick={increase}>Increase </button>

      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default MyButton;
