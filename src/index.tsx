import React from "react";

export function BlueHelloButton() {
  return (
    <button
      onClick={() => console.log("hello world")}
      style={{
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      hi
    </button>
  );
}

export default BlueHelloButton;
