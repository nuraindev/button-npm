// src/index.tsx
import { jsx } from "react/jsx-runtime";
function BlueHelloButton() {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => console.log("hello world"),
      style: {
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px"
      },
      children: "hi"
    }
  );
}
var index_default = BlueHelloButton;
export {
  BlueHelloButton,
  index_default as default
};
