"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import MyButton from "@/components/Button";

function myApp() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className="mainContainer">
      <Header count={count} />
      <MyButton
        count={count}
        reset={reset}
        increase={increase}
        decrease={decrease}
      />
    </div>
  );
}

export default myApp;
